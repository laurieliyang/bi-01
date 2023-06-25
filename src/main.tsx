// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </HashRouter>
)
