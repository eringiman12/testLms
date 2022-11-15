import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import  { Palam_get,Db_date_func} from '../sub_method/Sub_Function.js'

export const Process_naiyo = () => {

   const bu_name = Palam_get("bu_name");
    // 選択企業パラメータ取得
   const company_path = Palam_get("company_path");
   // DB取得
   const Db_Get_Date = Db_date_func('/company_process?bu_name=' + bu_name + "&company_path=" + company_path)

   let process_ary = [];

    // クリック対象企業をsessionに格納
    function clicked(param) {
        sessionStorage.setItem('shori_name', param)
    }

    return (
        <Fragment>
            {
                Db_Get_Date.map((Db_date) =>
                    {
                        if (company_path == Db_date.company_path) {
                            console.log(process_ary);
                            if (process_ary.indexOf(Db_date.shori_name) == -1) {
                                process_ary.push(Db_date.shori_name);
                                if(Db_date.shori_name !==null) {
                                    return (
                                        // onclickは無名関数を使用
                                        <div className={'uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small Company_name_element element_' +  Db_date.class_name}>
                                            <Link to={'/Shori_Company?bu_name=' + Db_date.class_name + '&company_path=' + Db_date.company_path + "&shori_naiyo=" + Db_date.shori_path} onClick={() => clicked(Db_date.shori_name)}><p>{Db_date.shori_name}</p></Link>
                                        </div>
                                    );
                                } else {
                                    return (
                                        // onclickは無名関数を使用
                                        <div className="regit_judge">
                                            <p className="regit_p">登録されていません。</p>
                                        </div>
                                    );
                                }
                            }
                        }
                    }
                )
            }
        </Fragment>
    )
}
