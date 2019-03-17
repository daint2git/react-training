// FNV-1 hash paramerters - http://www.isthe.com/chongo/tech/comp/fnv/#FNV-param

// ------------ FNV Primes ------------------ //
// By Bit size (32, 64, 128, 256)
const FNV_PRIME_32 = 0x1000193
const FNV_PRIME_64 = 0x100000001b3
const FNV_PRIME_128 = 0x1000000000000000000013b
const FNV_PRIME_256 = 0x1000000000000000000000000000000000000000163

const FNV_PRIME = (size = 32) => {
  if (size === 256) return FNV_PRIME_256
  if (size === 128) return FNV_PRIME_128
  if (size === 64) return FNV_PRIME_64
  return FNV_PRIME_32
}

// ------------ FNV Offset Basis -------------- //
const FNV_OFFSET_32 = 0x811c9dc5
const FNV_OFFSET_64 = 0xcbf29ce484222325
const FNV_OFFSET_128 = 0x6c62272e07bb014262b821756295c58d
const FNV_OFFSET_256 = 0xdd268dbcaac550362d98c384c4e576ccc8b1536847b6bbb31023b4c8caee0535

const FNV_OFFSET = (size = 32) => {
  if (size === 256) return FNV_OFFSET_256
  if (size === 128) return FNV_OFFSET_128
  if (size === 64) return FNV_OFFSET_64
  return FNV_OFFSET_32
}

/**
 * Creates FNV-1 hash from a json string
 *
 * @param {String} data
 * @param {Integer} size (bit-size)
 * @return {Number} (hash of data)
 */
export default function hashGenerate(data, size = 32) {
  const hash = data.split('').reduce((hash, _, index) => {
    hash ^= data.charCodeAt(index)
    hash *= FNV_PRIME(size)
    return hash
  }, FNV_OFFSET(size))
  return hash.toString(16)
}
