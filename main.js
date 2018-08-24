
const {app, BrowserWindow,Menu} = require('electron')


let mainWindow

function createWindow () {
  
  mainWindow = new BrowserWindow({width: 800, height: 600})

 
  mainWindow.loadFile('index.html')
  const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
  
  mainWindow.on('closed', function () {
    
    mainWindow = null
  })
}
const mainMenuTemplate=[
  {
    label:'Navigation',
    submenu:[
      {
        label:'next photo'
      },
      {
        label:'previous photo'
      },
      {
        label:'discard'
      },
      {
        label:'send'
      }
    ]
  }
];

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  
  if (mainWindow === null) {
    createWindow()
  }
})

