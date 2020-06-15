//model
const model = {
    user: {
        name: 'Terje',
        color: 'green'
    },
    currentSelectedPage: 0, //0 = group select 1 = aboutcolors 2 = summary 3 = peronal notes
    currentlySelectedGroup: 0, //0 = self 1 = next color 2 = next color
    groupCounts: {
        blue: 2,
        green: 2,
        red: 2,
    },
    groups: [
        {
            name: "red 1",
            color: "red",            
        },
        {
            name: "green 1",
            color: "green",            
        },
        {
            name: "blue 1",
            color: "blue",            
        },
        {
            name: "red 2",
            color: "red",            
        },
        {
            name: "green 2",
            color: "green",            
        },
        {
            name: "blue 2",
            color: "blue",            
        },
        {
            name: "red 3",
            color: "red",
        },
        {
            name: "green 3",
            color: "green",
        },
        {
            name: "blue 3",
            color: "blue",
        }
    ],    
    updates: [] //insert fake news
};