function isBalanced(s) {

    let brackets = "[]{}()<>"
    let stack = []

    for (let bracket of s) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex === -1) {
            continue
        }

        if (bracketsIndex % 2 === 0) {
            stack.push(brackets[bracketsIndex + 1])
        }
        else {
            if (stack.pop() !== brackets[bracketsIndex]) {
                return false;
            }
        }
    }
    return stack.length === 0

}

console.log(isBalanced('[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}'))