const AVATAR_API = 'https://api.dicebear.com/9.x/lorelei/svg?seed=';

export function getCustomAvatarURL(seed: string) {
  const encoded_seed = encodeURI(seed);
  return AVATAR_API.concat(encoded_seed);
}
