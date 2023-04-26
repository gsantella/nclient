import {generatePrivateKey, getPublicKey} from 'nostr-tools'

let sk = generatePrivateKey() // `sk` is a hex string
let pk = getPublicKey(sk) // `pk` is a hex string

console.log(sk)
console.log(pk)