class Queue{
    constructor(size){
        this.items = [];
        this.size = size;
    }
    enqueue(item){
        if(!this.isFull()){
            return this.items.unshift(item)
        }
    }
    
    dequeue(){
        if(!this.isEmpty()){
            return this.items.pop()
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
    }
    isEmpty(){
        return this.items.length === 0
    }
    isFull(){
        return this.items.length === this.size
    }
    print(){
        if(!this.isEmpty()){
            var index = this.items.length-1;
            while(index>=0){
                console.log(this.items[index]);
                index--;
            }
        }else{
            console.log("Empty Queue..!")
        }
    }
}
class Graph{
    constructor(no_of_vertices){
        this.no_of_vertices = no_of_vertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        this.AdjList.set(v,[]);
    }

    addEdge(v,w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v)
    }

    printGraph(){
        var get_keys = this.AdjList.keys();
        for(var i of get_keys){
            var get_values = this.AdjList.get(i);
            var conc = "";

            for(var j of get_values){
                conc +=j+" "
            }
            console.log(i + " --> "+ conc)
        }
    }
    bfs(startingNode){
        var visited = {};
        var q = new Queue();
        visited[startingNode]= true
        q.enqueue(startingNode);

        while(!q.isEmpty){
            var getQElement = q.dequeue()
            console.log(getQElement)

            var get_List = this.AdjList.get(getQElement);
            for(var i of get_List){
                var neighbour = get_List[i];
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.enqueue(neighbour)
                }
            }
        }
    }

}

var g = new Graph(6);
var vertices = ['A','B','C','D','E','F']

for(var i =0; i<vertices.length;i++){
    g.addVertex(vertices[i])
}
g.addEdge('A','B')
g.addEdge('A','D')
g.addEdge('A','E')
g.addEdge('B','C')
g.addEdge('D','E')
g.addEdge('E','F')
g.addEdge('E','C')
g.addEdge('C','F')

g.printGraph()

console.log("BFS");
g.bfs('E')