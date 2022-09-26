import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
export const SidebarData = [
    {
        title:'ホーム',
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        title:'メール',
        icon: <EmailIcon /> ,
        link: '/mail'
    },
    {
        title:'アナリティクス',
        icon: <AssessmentIcon /> ,
        link: '/analytics'
    },
    {
        title:'友達追加',
        icon: <PersonAddIcon /> ,
        link: '/add-friend'
    },
    {
        title:'お支払い設定',
        icon: <AddCardIcon /> ,
        link: '/pay-setting'
    },
    {
        title:'アップロード',
        icon: <CloudUploadIcon /> ,
        link: '/upload'
    },
    {
        title:'詳細設定',
        icon: <SettingsIcon /> ,
        link: '/setting'
    }, 
]