import {Route, Routes, Navigate} from 'react-router-dom'
import HomePage from 'pages/home';
import PostListPage from 'pages/posts';
import PostDetail from 'pages/posts/detail';
import PostNew from 'pages/posts/new';
import PostEdit from 'pages/posts/edit';
import ProfilePage from 'pages/profile';
import ProfileEdit from 'pages/profile/edit';
import NotificationsPage from 'pages/notifications';
import Search from 'pages/search';
import LoginPage from 'pages/users/login';
import SignupPage from 'pages/users/signup';

export default function Router () {
    return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/posts' element={<PostListPage/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
        <Route path='/posts/new' element={<PostNew />}></Route>
        <Route path='/posts/edit/:id' element={<PostEdit/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/profile/edit' element={<ProfileEdit />}></Route>
        <Route path='/notifications' element={<NotificationsPage />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/users/login' element={<LoginPage />}></Route>
        <Route path='/users/signup' element={<SignupPage />}></Route>
        <Route path='*' element={<Navigate replace to="/" />}/>
      </Routes>
    )
}