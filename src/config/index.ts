// const getConfigVars = (env: NodeJS.ProcessEnv) => {
//   const { MONGO_DB_PASSWORD, MONGO_DB_USERNAME, ENV } = env;
//   return `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.ku6ozsp.mongodb.net/${process.env.ENV}?retryWrites=true&w=majority`;
// };

const MONGO_URL_PROD =
  "mongodb+srv://yakxa:N0n4eDU240YyANZb@cluster0.ku6ozsp.mongodb.net/main?retryWrites=true&w=majority";
const MONGO_URL_DEV =
  "mongodb+srv://yakxa:MawAhdPyu59cNoEW@yakxawebsitedev.ydnme0k.mongodb.net/?retryWrites=true&w=majority";
const FIREBASE_DEV = {
  type: "service_account",
  project_id: "yakxa-dev-ef173",
  private_key_id: "6ef9a7044878e6dfb60da6f356c72c117504384c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCiXAYJF7+QKB+w\nkLBRroKiLDRRLuDit3k0vpFqgSTH9uveTRjc9PVpzoDr6KoIzRYaimMaUBw0btDw\nQdR2BVBcQgc0daHLnaPDf3lpzFltdpc/zEfmWuWQQ+nzWVI9dbiZuqI8Mu5jZMfC\nwXxQ1jKJGZWXqR5Sbtzv9yMWKQa/ysE5nJepLWZxU7OJCnJ21ykT0duR6DSlzGSn\nz5FNaTgBIPRqURr/m06x0B1VcpkpsXCLY2I1YVEq6NpcHNg4D2fzAn/HFBx/Gj2b\nQRXKVv8nEbEomNiIYZiWtHeveDBT82pHEAloX1N2FvVVkX7M4cuR/xNIE/miZtyS\ng/XefHQDAgMBAAECggEACePBGlyv9n/7Li4iD1ep7Wbz6N4KJMU4RNY21V34d5W6\n2Fep5Aunx0Ik6DnL4a1cY1F6p+epUChP4dKgtm+sbXI4LiHcMSLxDr99Dcy8xcYr\ngF9ZIdb3lMoOPhx6vfOlwvdzWmdfzf4djOdsQyBJA8DjM9HBXxQRsSxEntzw5E3E\ndPsKA864gJj+vJTLrcV52NT7IVZ1ZTztYNv149/FMj8T0t0k7UjOta4g7A1lzt1G\nNQ/vpDYx15OVaYaLamEwlrQb/AC15afmpzsF5wtmwBhy4JeTi/2MmVntsH12ksuV\nYKEr4ZGVuJf5jkh5b0nZrZKOZCbmHfE2S/BGLbEtgQKBgQDf9EJ8qXfL+ED1SRiI\nZGbRz4j9R34cmWo8qS/xpa1bEFadv67+E3j0DXcWX2nla0ulTJWa2Sr72jr22/QI\nUOVkmVsO23RyuTTEDV4zf9dje+8I+94+sxTjn1yDP4YCQqrWedWzcZFty3U1GLeL\nlPMbPq8iOgcID19KszwjPYkaSwKBgQC5l3fs5oYg7fJ3GDcn+8qobvDjBAcpQRN+\n1oWKHmSUeX6I0Y+oT0sj2F27615CF3dsst3k2YeEJLleTJpjFQqHNGo396Kel1or\nHfBoDudheOkB4zV2NKb2MOWcjgMrfF4dBcD47j7O9CRvSpKoVPbV0DgWlrB0FeTs\n3EtHN076KQKBgQDWIhAccFF6NrGtlqmdaBqjzEMYoe4kXFAnFkIgVKCv7KxVAv3I\nNEg3WlSekLaJRRE8SUDWoYUm8J/mf6MS/H6JtNRLHWx3cTzRpFKI/Vit58dDmMgE\nvWhgyHRFjkyNBr+geTfq7tD14U79aNe+37mfOE1udXtZqpEbtMrwixr3hwKBgQCb\ngM57MKwx6y29nAya895aQpqTnExjxKMRI63AjLa5sRLUkMJNxCKxZhkj25KezgrC\niRxjI+DoV9z5pjW1z2uC3egh/NvFBgwHFI7aoaI9iZGygy3IXVWH8nBxPIxrY0l4\nB9oouXbm8KmWlmVLpeUsQcq9IoW2vqGR1QM+KJmEAQKBgHULmkmv73t0X3tKBCqc\nRWjk6IVc25bkLdwYhHD65iu2hdhn5pPBiTiMs8Mm6s56SbePxLl6Orkr7i2R8YiB\nUrtFXEUiuMD4WtfYkTjlnud+1ejOg1O/GIW+mf/ZOpzWm3bFllhQ2SPoDb8IiktL\n3WTgt73QCu1QJNI/gKy6io5a\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-meyyw@yakxa-dev-ef173.iam.gserviceaccount.com",
  client_id: "112889411248807413371",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-meyyw%40yakxa-dev-ef173.iam.gserviceaccount.com",
};

const FIREBASE_PROD = {
  type: "service_account",
  project_id: "yakxa-prod",
  private_key_id: "2372f96818d1180e17387d2aee07e77a6e840ae8",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEMqwcKf85wtqv\noqB330cWa75/qD2gq9arJ7z/Y+KrAknwyZ9++JfQ5PfKdv7vbJ80MM+b4+qibZdh\ncpks4T1D9GxU5MDK5xL0uZz3ZBnPtHV0wtOFIKLVAEm0l4vrNqV6DTz5tdJGtYmc\n5OLpHjzTpQ9eg+nAotax38gPTK3JKyr2BeEJ3qGXPR1bww8z+/oO/ZTqlQRdjUpw\nDUQae7HoGvU1IiLwll7BhZ1CEC3ouD9JXoftUL83XIC5WxtrjBwtTw7oL0fZyuiG\nenwCZidiDRf/86BI9Hbgu2tC2VXrxtbM76Ky7XDLxsSIM9cjiO0l083ndw9FhDX2\n8Bvu15DPAgMBAAECggEAAI0xP5CuDzmy8p4ydTPq3hWilUtvd6nVam+GgJUncy3g\nMiN3/oKo70Z4xIE/9fhlaSQ3bX1DQLHiVhB1gkOQia6HgsBpwzOTqcd5dTOESt40\nGhRK/7Xhsc3uvi9C9UEvVk8mnnxE+ae75oYqVLI/71/wwhmBRHiPoMZWwpnNHK3m\nTuJ9y94fEJUSh8ossTe/G2PCI0fMNZbtu4VtikPPX72T6Y2tjY5757lmn0AyVGow\nlZU69AIZCJRqcTU/N3UTMNDBJxX1+XeiPiqE8aZFit6ykjoxLOAjhyMcFJKqzzs2\nfneBTijjXP9RuKpbcDRv71ioSoE2GYZzoPWfapHtsQKBgQDtWTrrj1J1HhZX7ZO8\n2NlD/qOXek7tsFifi7JgIrJ10Le+VsxllkOu/R/T9Ih1IYC5BqqGvqoLqXNEA/Zs\nq0EkHQ1XQg++XSoIVbQo0YtlINpU1B8O7Ps2EYI4PiqKGboqgkZDWC1Nv2GQ4Q5c\ntN/i+EaO0GW5L2V+LhTAgQTo0wKBgQDTnZw0UDgNh7nhGehJFf5IXT913Dgz1GKC\nnzscNDj+5Qr97BmwijJ7bk1GtI/nm7/hxtiKmyoVkIKYxaFYt2sAg+vfr5kLWX9+\nibTAJ5ppZoF3uDiTj/PtqsHbt/vmgUEB1KKxrmdIL9I7vzLVJ3b92YtUmMVKRJRy\nPIV1Iyr6lQKBgQCszQQqsCQWhJs71Qp0uWQlLuUnybJhNryvG+P4Pgqz4AuGlmcl\npusMIdnkVOpsbMHs879/bp0a9HmpEUF+CIjapBQsbTpNHEMX4l3SQg08yVhr3ivm\nj/6tdL3b+Na7yNNTU5mYOkBxlF6SPmhYco92DdBA9dS5qJo57Y7KQKS0ZQKBgEKT\nETN8EUZgbuAckHF909PcUjy4HY5gwOUrRyNmYo/+aujbwHFD6QHf/7vAzo0k+McF\nEdb5XdIO9qctdcc9XRJ6blifG9zwOSYMGKtjSjbiotSRRmtWHH2m/Pos9bjc7SCw\nTsbrgV66fL+DNXDNy6etKyJgNaFZ1gHifHIPsFPJAoGBAKQqyuCVg0hJx5AVHQcK\nR+BUrtd/YKywzQpbsp0KFVSv46iwpbuAZwVURSx9A6VxguOjvoq5fC2BAHojPWqI\nMmM627pobO8RZ1q86OGG9IUrLFvMZkvT49C0gd1wT+lqpUpU5MZf5+orPqSa1LZg\n7qDlrnTJKjbGjhDa/9TsTcXq\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ew476@yakxa-prod.iam.gserviceaccount.com",
  client_id: "112505085196667516187",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ew476%40yakxa-prod.iam.gserviceaccount.com",
};

const getConfigVars = () => {
  let mongoURL: typeof MONGO_URL_DEV, firebaseSecrets: typeof FIREBASE_DEV;
  const { ENV } = process.env;
  if (ENV == "production") {
    return {
      mongoURL: MONGO_URL_PROD,
      firebaseSecrets: FIREBASE_PROD,
    };
  }
  return {
    mongoURL: MONGO_URL_DEV,
    firebaseSecrets: FIREBASE_DEV,
  };
};
export default getConfigVars;
