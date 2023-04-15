//data json
const generalDescription="I am a sensitive and thoughtful person who always looks for a reason to make everything better for everyone.";
const aboutMe="I want to make a career in a company where my work can help costumers, and lead my co-workers to be the best they can ever be"
const contacts=[
    {
        path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        name:"Linkedin",
        contact:"https://www.linkedin.com/in/fernando-paj%C3%B3n-43214626b",
    },
    {
        path: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
        name:"Telegram",
        contact:"1176177910",
    },
    {
        path:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
        name:"E-Mail",
        contact:"alejandrabotacura@outlook.com.ar",
    },
]
const abouts=[
    {
        name: "Profile",
        path: "M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z",
        content:"I am interested about progress every day, Developing myself in my workspace based on good performance, attitude, and integration with colleagues."
    },
    {
        name: "Performance",
        path: "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z",
        content:"I am active and organized, I used to look for solutions and always prioritize objetives above anything else. What I enjoy the most is coworking, and sharing knowledge acquired through experience"
    },
    {
        name: "Looking for",
        path: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
        content:"a work where i will be constantly learning, developing projects that require creativity in solving problems, improving my skills every day, somewhere i can be proud of working at"
    },

]
const languages=[
    {
        name:"Spanish",
        level:"Native", 
    },
    {
        name:"English",
        level:"Fluid", 
    }
]
const technologies=[
    {
        name:"JavaScript",
        icon:"fa-brands fa-js",
        meter: 6
    },
    {
        name:"HTML",
        icon:"fa-brands fa-html5",
        meter: 6
    },
    {
        name:"CSS",
        icon:"fa-brands fa-css3-alt",
        meter: 5
    },
    {
        name:"React.js",
        icon:"fa-brands fa-react",
        meter: 6
    },
    {
        name:"React Native",
        icon:"fa-solid fa-mobile-notch",
        meter: 2
    },
    {
        name:"Electron",
        icon:"fa-sharp fa-regular fa-desktop",
        meter: 2
    },
    {
        name:"Adobe Illustrator",
        icon:"fa-solid fa-vector-square",
        meter: 8
    },
    {
        name:"Adobe Photoshop",
        icon:"fa-solid fa-image",
        meter: 7
    },
]
const certifications=[
    {
        name:"Full Stack Developer-UTN",
        status:"currently studying",
        icon:"",
        content:"Full stack development diploma, working with React, Mondo DB, MySQL, Node.js and Typescript"
    },
    {
        name:"FreeCodeCamp certification in Javascript Data Structures and Algorithms",
        status:"Finished",
        icon:"fa-brands fa-free-code-camp",
        content:"Javascript Data Structures, methods and algorithms, you can see the certification here: https://www.freecodecamp.org/fcc5ecf56b1-506d-4112-b573-2d5f5a975f31"
    },
    {
        name:"FreeCodeCamp certification in FrontEnd Development Libraries",
        status:"currently studying",
        icon:"fa-brands fa-free-code-camp",
        content:"Practical course about Bootstrap, JQuery, React.js and Redux, Redux/Toolkit, you can see my progress here:  https://www.freecodecamp.org/fcc5ecf56b1-506d-4112-b573-2d5f5a975f31"
    },
    {
        name:"Practical Graphic Design certification in CorelDraw, CorelPhotoPaint, Adobe Illustrator and Photoshop ",
        status:"Finished",
        icon:"fa-regular fa-book-open",
        content:"Practical course about design of vector images and bitmaps."
    },
]
const experience=[
    {
        name:"Arco Maquinarias",
        logo:"fa-regular fa-screwdriver-wrench",
        summary:"[2019-2020] Worked on dispatch and stock controll",
        tokens:["Responsability","Hard Work"],
    },
    {
        name:"Distribuidora Luciano",
        logo:"fa-solid fa-shop",
        summary:"[2020-2021] Worked on costumer support, and shop management",
        tokens:["Responsability","Co-working","Leading"],
    },
    {
        name:"Arco Maquinarias",
        logo:"fa-regular fa-screwdriver-wrench",
        summary:"[2021-currently] Working as web assistant, e-commerce customer service, payment management, replacement cashier, replacement Mercado Libre (e-commerce platform) management",
        tokens:["Responsability","Co-working","Multitasking"],
    },
]
export { generalDescription, aboutMe,contacts,abouts,languages,technologies,certifications,experience }