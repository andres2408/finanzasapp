import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import Gastos from './components/Gastos'
import Frases from './components/Frases'
import MostrarFrases from './components/MostrarFrases'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:user',
                name: "user",
                component: User
            },
            {
                path: '/DataOut/:nombreGasto',
                name: "nombreGasto",
                component: UserBalance
            },
            {
                path: '/DataIn/',
                name: "Gastos",
                component: Gastos
            },
            {
                path: '/DataOut/frase',
                name: "Frases",
                component: Frases
            },
            {
                path: '/DataOut/Mostrarfrases',
                name: "MostrarFrases",
                component: MostrarFrases
            },
        ]
    })

export default router
