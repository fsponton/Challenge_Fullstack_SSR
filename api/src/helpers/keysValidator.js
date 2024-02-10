import { KeysError } from "../utils/errors/index.js"

const keysValidator = (keysFromRequest, originalKeys) => {

    const stringKeys = keysFromRequest.join(", ")

    const sortedKeysFromRequest = keysFromRequest.sort()
    const sortedOriginalKeys = originalKeys.sort()

    // Compare keys from request are equals of original keys 
    for (let i = 0; i < sortedKeysFromRequest.length; i++) {
        if (sortedKeysFromRequest[i] !== sortedOriginalKeys[i]) {
            throw new KeysError(`Mistake key: ${sortedOriginalKeys[i]} on req.body. The keys provided are: ${stringKeys}. Please Check `, 400)
        }
    }
    return
}

export default keysValidator;