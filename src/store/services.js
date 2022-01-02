export default {
    state: {
       services:[
           {
               image:require('@/assets/images/services_icon_1.png'),
               name:'Commercial',
               text:'Highly professional commercial painting services',
               link:'',
           },
           {
               image:require('@/assets/images/services_icon_2.png'),
               name:'Industrial',
               text:'Highly professional commercial painting services',
               link:'',
           },
           {
               image:require('@/assets/images/services_icon_3.png'),
               name:'Strata',
               text:'Highly professional commercial painting services',
               link:'',
           },
           {
               image:require('@/assets/images/services_icon_4.png'),
               name:'Residential',
               text:'Highly professional commercial painting services',
               link:'',
           },
       ],
        projects:[
            {
                image:require('@/assets/images/project__img-1.png'),
                name:'Project 1',
                text:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh magna aliquam',
                link:'',
            },
            {
                image:require('@/assets/images/project__img-2.png'),
                name:'Project 2',
                text:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh magna aliquam',
                link:'',
            },
            {
                image:require('@/assets/images/project__img-3.png'),
                name:'Project 3',
                text:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh magna aliquam',
                link:'',
            },
        ],
        calculator:[
            {
                number:124,
                name:'completed_projects'
            },
            {
                number:56,
                name:'happy_clients'
            },
            {
                number:34,
                name:'team_members'
            },
            {
                number:10,
                name:'years_of_expertese'
            },
        ],
        review:[
            {
                avatar:require('@/assets/images/review__img.png'),
                name:'Antony Smith',
                position:'Project Manager',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
            },
            {
                avatar:require('@/assets/images/review__img_2.png'),
                name:'Maria Jones',
                position:'CEO',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
            },
            {
                avatar:require('@/assets/images/review__img.png'),
                name:'Antony Smith',
                position:'Project Manager',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing'
            },
            {
                avatar:require('@/assets/images/review__img_2.png'),
                name:'Maria Jones',
                position:'CEO',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
            },
            {
                avatar:require('@/assets/images/review__img.png'),
                name:'Antony Smith',
                position:'Project Manager',
                description:'Lorem ipsum dolor sit amet, consectetuer adipiscing'
            },
            {
                avatar:require('@/assets/images/review__img_2.png'),
                name:'Maria Jones',
                position:'CEO',
                description:' Lorem ipsum dolor sit amet, consectetuer adipiscing  elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
            },
        ],
        homeSlider:[
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
            {
                title:'<strong>ARSEN</strong> PAINTING GROUP',
                subTitle:'QUALITY EXPEiRNiCE SERVICE',
                image:require('@/assets/images/slider_1.jpg'),
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        GET_SERVICES(state) {
            return state.services;
        },
        GET_PROJECTS(state) {
            return state.projects;
        },
        GET_CALCULATOR(state) {
            return state.calculator;
        },
        GET_REVIEW(state) {
            return state.review;
        },
        GET_HOME_SLIDER(state) {
            return state.homeSlider;
        },
    },
};
