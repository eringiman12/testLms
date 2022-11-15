import React, {Fragment, useRef, useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { useParams, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

// 外部関数のimpirt
import  { Palam_get,Db_date_func} from '../sub_method/Sub_Function.js'

export const Company_drawing = () => {
   // 相対パス指定(get関数でnameパラメータ取得)
   const bu_name =  Palam_get("bu_name");

   // DB取得
//    const Db_Get_Date = Db_date_func('/sample')
    const Db_Get_Date = Db_date_func('/sample?bu_name='+bu_name)

    // クリック対象企業をsessionに格納
    function clicked(param) {
        sessionStorage.setItem('company_name', param)
    }

    return (
        <Fragment>
            <div className='drawing_Area uk-flex uk-flex-wrap uk-flex-wrap-around uk-height-medium' id="drawing_Area">
                {
                    Db_Get_Date.map((Db_date) =>
                        // <li>{Db_date.bu_name}</li>
                        <div className={'uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small Company_name_element element_' +  Db_date.class_name}>
                            {
                                (() => {
                                    return (
                                        // onclickは無名関数を使用
                                        <Link to={'/Shori_Company?bu_name=' + Db_date.class_name + '&company_path=' + Db_date.company_path} onClick={() => clicked(Db_date.company_name)}><p>{Db_date.company_name}</p></Link>
                                    );
                                })()
                            }
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}
