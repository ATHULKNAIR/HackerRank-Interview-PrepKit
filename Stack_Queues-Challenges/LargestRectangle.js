function largestRectangle(h) {
    
    const heights = [...h, 0]
    let area = 0
    let i = 0
    let stack = []
    
    while (i < heights.length) {
        console.log("Value of i : "+i)
        console.log("Length of heights array : "+heights.length)
        if (!stack.length || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i++)
            console.log(stack)
            console.log("after pushing to stack , Value of i : "+i)
        } else {
            const top = stack.pop()
            console.log("Top is : "+top)
            const lastPosition = stack[stack.length - 1]
            console.log("LastPosition : "+lastPosition)
            const buildingHeight = heights[top]
            console.log("BuildingHeight : "+buildingHeight)
            const numberOfBuildings = stack.length ? (i - lastPosition - 1) : i
            console.log("No.Of Buildings : "+ numberOfBuildings)
            area = Math.max(area, buildingHeight * numberOfBuildings)
            console.log(area)
        }
    }
    return area

}

console.log(largestRectangle([1,2,3,4,5]))