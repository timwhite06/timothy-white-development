# CloudFront Signed URLs – Key Learnings

When working with AWS CloudFront to serve private content via signed URLs, there are several steps and considerations to ensure everything works properly.

## 1. Overview of Signed URLs

Signed URLs let you restrict access to files served by CloudFront. You generate a temporary URL containing a signature that proves the request is authorized.

## 2. Key Components

### Public Key / Private Key

- **Private Key**: Used by you (the content distributor) to sign URLs.
- **Public Key**: Used by CloudFront to verify the signature. These keys must match (i.e., they are a matching RSA key pair).

### Key Pair ID

- This is the identifier of the public key uploaded into CloudFront.
- You must use that Key Pair ID in the signed URL to let CloudFront know which public key to use for verification.
- **Important**: The Key Pair ID in CloudFront is not the same as your AWS Access Key ID (from your “Security Credentials” page). Make sure you’re using the public key’s Key Pair ID that you set up specifically for CloudFront.

### Signed URL Parameters

- **Canned policy**: Uses `Expires`, `Signature`, and `Key-Pair-Id`.
- **Custom policy**: Uses `CloudFront-Policy`, `CloudFront-Signature`, and `CloudFront-Key-Pair-Id`.

## 3. Why `expires` Might Not Work (If Using Custom Policy)

- If you are explicitly using a custom policy (for example, by providing `dateLessThan`), then `expires` doesn’t do anything for that request. The library automatically constructs a custom policy which overrides `expires`.
- Conversely, if you want to use a canned policy, you specify an `expires` (epoch timestamp) and do not provide `dateLessThan`.

## 4. Common Causes of 403 Forbidden

### Wrong or Mismatched Private Key

- Make sure your private key actually matches the public key in CloudFront.
- <b>DO NOT</b> use the IAM Access Key and Secret Key from “Security Credentials”; those are for AWS SDK calls, not for CloudFront signatures.

### Incorrect Key Pair ID

- The `Key-Pair-Id` must be the one you see in CloudFront for your public key. If you use an IAM Access Key ID or a different Key Pair ID, the signature check fails.

### Malformed Private Key in `.env`

- If you store your key with `\n`, ensure you convert them to real newlines before using it.
- Avoid extra double quotes around the entire PEM in your `.env` file.

### Requesting the Wrong Domain

- Your signed URL must point to `https://<cloudfront-domain>/<path>` instead of an S3 bucket URL.

### Incorrect CloudFront Distribution Setup

- Under Behaviors, verify `Restrict Viewer Access (Use Signed URLs or Signed Cookies)` is `Yes` for the path(s) you want to protect.

### Clock Skew

- If your local system clock differs significantly from CloudFront’s, your `Expires` or `dateLessThan` values may not match up.

## 5. Example: Custom Policy With `dateLessThan`

If you want to use a custom policy (e.g., `dateLessThan` plus potentially IP restrictions), then:

```js
import { getSignedUrl } from '@aws-sdk/cloudfront-signer';
import fs from 'fs';

const cloudFrontDomain = 'YOUR_DISTRIBUTION_ID.cloudfront.net';
const fileName = 'path/to/your/video.mp4';
const privateKey = fs.readFileSync('./private_key.pem', 'utf8');
const keyPairId = 'APKAXXXXXXXXXXXXX';

// 1 hour from now
const dateLessThan = new Date(Date.now() + 60 * 60 * 1000).toISOString();

const signedUrl = getSignedUrl({
    url: `https://${cloudFrontDomain}/${fileName}`,
    keyPairId,
    privateKey,
    dateLessThan, // This triggers a CUSTOM POLICY
});

console.log('Signed URL:', signedUrl);
```

Here, you won’t see `Expires=...` in the URL, but rather `CloudFront-Signature`, `CloudFront-Policy`, and `CloudFront-Key-Pair-Id`.

## 6. Final Tips

### Validate the Private Key

- Ensure your `.env` variable yields a valid PEM file. No extra quotes, correct line breaks.

### Use Short Expiration

- For production, shorter expiration times (e.g., an hour or a day) are usually safer.

### Public Key Setup

- In CloudFront > Public Keys (legacy) or Key Groups (modern approach), ensure your public key is there and the Key Pair ID is correct.

### Testing

- Generate a URL with a quick Node.js script (no frameworks).
- Paste the URL into a private browser window.
- If it works there, but fails in your app, the issue may be in your app’s code or environment handling.

With the correct Key Pair ID (from CloudFront, not your AWS Security Credentials) and a properly formatted private key, you can reliably generate CloudFront signed URLs without encountering 403 Forbidden errors!