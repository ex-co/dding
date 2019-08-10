const data = [
    {
        User: "yegeeee",
        Team: "Ex Co.",
        Board: "DDing",
        Task: "Upload Dummy File",
        Due: "2019.07.28"
    },
    {
        User: "yegeeee",
        Team: "Samsung",
        Board: "DDing",
        Task: "Upload Dummy File",
        Due: "2019.07.28"
    },
    {
        User: "jaewon",
        Team: "Ex Co.",
        Board: "DDing",
        Task: "Update Dock",
        Due: "2019.07.28"
    }
]

function getUserTask(userName) {
    const result = [];

    data.forEach((item) => {
        
        if(item.User === userName){
            result.push(item);
        }
    });
    return result;
};

function getUserTeam(userName) {
    const result = [];

    data.forEach((item) => {
        if(item.User === userName){
            result.push(item.Team);
        }
    });

    console.log(result);
    return result;
};

export default {getUserTask, getUserTeam};