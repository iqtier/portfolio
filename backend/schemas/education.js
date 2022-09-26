export default {
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        { 
            name:'degree',
            title:'Degree',
            type: 'string'
        },
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}