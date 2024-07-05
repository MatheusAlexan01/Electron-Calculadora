const {app,BrowserWindow,Menu,shell} = require('electron')

let mainWindow=  null;

app.on('ready',()=>{

mainWindow = new BrowserWindow({
width: 2000,
height:1000,
icon: 'css/calculadoraico.ico' 


})
Menu.setApplicationMenu(Menu.buildFromTemplate(abas))
mainWindow.loadFile('app/calculadora.html')
})


app.on('window-all-closed',()=>{
    app.quit();

})

const abas = [
    {
        label: 'Arquivo',
        submenu:[

            {

                label:'Sair',
                click: () => app.quit(),
                accelerator:'Atl+F4' 
            },
            {
                label: 'Atualizar',
                role: 'reload'
            },
            {
                label: 'Corta',
                role: 'cut'
            },
            {
                label:'Copiar',
                role: 'copy'
            }

        ]
            

    },
    {
        label: 'Exibir',
        submenu:[
            {
                label: 'Aumentar Zoom',
                role: 'zoomIn'


            },
            {
                label: 'Diminuir Zoom',
                role: 'zoomOut'
            },
            {
                label: 'Restaurar Zoom',
                role: 'resetZoom'
            },
            {
                label: 'Ferramenta de Desenvolvedor ',
                role: 'toggleDevTools'
            }

        ]



    },
    {
        label: 'Ajuda',
        submenu:[
            {
                label: 'Manual',
                click: () => paginaManual()

                
            },{
                label: 'Documentação',
                click: () => shell.openExternal('https://drive.google.com/file/d/1MJBpn7AE7apNMY5HHCw-pXfFRP3jD0U8/view?usp=sharing')

            }

        ]

    }
]

const paginaManual = ()=>{
const manual = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true


})

manual.loadFile('app/Manual.html')
}