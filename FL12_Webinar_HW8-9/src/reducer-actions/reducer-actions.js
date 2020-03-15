const initialState = [
    {id: 6, title: "Prerequisites", description: "Webpack, AngularCLI, TypeScript.", date: "2018-02-18", duration: "01:34", author: 'Epam'},
    {id: 5, title: "Components", description: "Components; lifecycle, template DSL and data-binding, Custom components.", date: "2018-02-01", duration: "01:34", author: 'Epam'},
    {id: 4, title: "Directives + Pipes", description: "Directives, types of directives, built-in-directives, custom directive, pipes, custom pipes, async pipe...", date: "2018-01-15", duration: "01:34", author: 'Epam'},
    {id: 3, title: "Modules & Services", description: "Services, DI, modules, lazy Loading.", date: "2017-12-28", duration: "01:34", author: 'Epam'},
    {id: 2, title: "Change detection", description: "Zone js, flow, Immuttutable data structure, push strategy.", date: "2017-11-29", duration: "01:34", author: 'Epam'},
    {id: 1, title: "Routing", description: "Routing, Lazy and preloading, CanActivate, CanDeactivate.", date: "2017-10-03", duration: "01:34", author: 'Epam'}
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [action.data].concat(state);
        case 'DELETE_COURSE':
            return state.filter((course)=> course.id !== action.id);
        case 'EDIT_COURSE':
            return state.map((course)=>course.id === action.id ? {...course,editing:!course.editing}:course);
        case 'UPDATE':
            return state.map((course)=>{
                if(course.id === action.id) {
                    return {
                        ...course,
                        title:action.data.newTitle,
                        description:action.data.newDescription,
                        duration: action.data.newDuration,
                        author: action.data.newAuthor,
                        date: action.data.newDate,
                        editing: !course.editing
                    }
                } else return course;
            })
        default:
            return state;
    }
}

export default reducer;