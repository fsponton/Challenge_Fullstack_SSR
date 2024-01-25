import { KeysError } from "../utils/errors/index.js"


const keysValidator = (keysFromRequest, originalKeys) => {

    const stringKeys = keysFromRequest.join(", ")

    // check keys quantity keys
    if (keysFromRequest.length !== originalKeys.length) { throw new KeysError(`The keys provided: ${stringKeys} in req.body are not valid. Please Check`, 400) }

    const sortedArray1 = keysFromRequest.sort()
    const sortedArray2 = originalKeys.sort()

    // compare values of arrays
    for (let i = 0; i < sortedArray1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
            throw new KeysError(`The keys provided: ${stringKeys} in req.body are not valid. Please Check `, 400)
        }
    }

    return

}

export default keysValidator;