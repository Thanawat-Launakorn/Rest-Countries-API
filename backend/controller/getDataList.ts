import { RequestHandler } from "express";
import { CommomResponse } from "..";
import data from '../model/data'
export default <RequestHandler<unknown, CommomResponse>>((req, res) => {
    const dataList = data
    res.json({ data: dataList })
})