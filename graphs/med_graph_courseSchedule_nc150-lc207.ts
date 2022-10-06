import * as utils from '../utils';

/**
 * @name canFinish - medium - neet150 - lc207
 * @access https://leetcode.com/problems/course-schedule/
 * @description There are a total of numCourses you have to take, labeled
 * 0 to numCourses - 1.  You are given an array 'prerequisites' where 
 * prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first
 * if you want to take course a_i.
 * @example 
 * numCourses = 2, prerequisites = [[1,0]], output = true 
 * explanation =  there are a total of 2 courses to take.  To take course 1 you
 * should have finished course 0. So it is possible. 
 * @param {number} numCourses 
 * @param {number[][]} prerequisites 
 * @summary 
 *  1. set up graph
 *  2. init colorState (all white), stack
 *  3. only check if color = white
 *  4. need to peek at node 1st time, pop 2nd time bc 
 * we need to keep a node in stack until DFS process has finished. 
 *  5. disconnected components => loop thru nodes! 
 *     
 */
// time: o(courses + prereq) space: o(courses + prereq)

function canFinish_color(numCourses: number, prerequisites: number[][]): boolean {

    let graph: any = {}
    for(let course=0; course < numCourses; course++){
        graph[course] = [];
    }
    for(let prereq of prerequisites){
        let [courseA, courseB] = prereq;
        graph[courseA].push(courseB);
    }

    let colorState = new Array(numCourses).fill('white')
    let stack: number[] = [];

    let _dfsHelper = (course: number) => {

        if(colorState[course] === 'white'){
            stack.push(course);
            while(stack.length){
                let current: number = stack[stack.length-1] // 
                if(colorState[current] === 'white'){
                    colorState[current] = 'grey'
                }else if(colorState[current] === 'black' || colorState[current] === 'grey'){
                    stack.pop()
                    colorState[current] = 'black';
                    continue;
                }
                for(let neighbor of graph[current]){
                    if(colorState[neighbor] === 'white'){
                        stack.push(neighbor);
                    }else if(colorState[neighbor] === 'grey'){
                        return false
                    }
                }
            }
        }
        return true
    }

    //5. loop thru each course, disconnected graph?
    for(let course=0; course < numCourses; course++){
        if(!_dfsHelper(course)) return false
    };

    return true;
};

/**
 * 
 * Find all the indegrees of course prereqs
 * Put all the courses with indegree 0 to the queue
 * Iterate while the queue length is not zero, keep track of the count of removed from queue
 * Remove each associated prereq indgrees
 * check whether the indegree became zero and repeat the loop
 * Check if the count is equal to the total course number
 */
function canFinish_topoSort(numCourses: number, prerequisites: number[][]): boolean {

    let graph: any = {}
    for(let course=0; course < numCourses; course++){
        graph[course] = [];
    }
    for(let prereq of prerequisites){
        let [courseA, courseB] = prereq;
        graph[courseA].push(courseB);
    }


    }

    //5. loop thru each course, disconnected graph?
    for(let course=0; course < numCourses; course++){
        if(!_dfsHelper(course)) return false
    };

    return true;
};



const courseSchedule1: any = {
    'numCourses': 2,
    'prerequisites': [[1,0]]
} // true
const courseSchedule2: any = {
    'numCourses': 2,
    'prerequisites': [[1,0], [0,1]]
} // false *cycle detected
const courseSchedule41: any = {
    'numCourses': 20,
    'prerequisites': [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]
} // false *cycle detected
const courseSchedule43: any = {
    'numCourses': 5,
    'prerequisites': [[1,4],[2,4],[3,1],[3,2]]
} // true

let {numCourses, prerequisites} = courseSchedule2;

utils.timed('res', canFinish_color, [numCourses, prerequisites])