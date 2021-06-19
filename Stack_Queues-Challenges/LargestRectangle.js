function largestRectangle(h) {
    
    const heights = [...h, 0]
    let area = 0
    let i = 0
    let stack = []
    
    while (i < heights.length) {
        if (!stack.length || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i++)
        } else {
            const top = stack.pop()
            const lastPosition = stack[stack.length - 1]
            const buildingHeight = heights[top]
            const numberOfBuildings = stack.length ? (i - lastPosition - 1) : i
            area = Math.max(area, buildingHeight * numberOfBuildings)
        }
    }
    return area

}

console.log(largestRectangle([1,2,3,4,5]))