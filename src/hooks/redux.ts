import { RootState, AppDispatch } from './../store/store';


import { useSelector } from 'react-redux';
import {   useDispatch, TypedUseSelectorHook } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector