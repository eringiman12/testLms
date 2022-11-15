import React, {Fragment, useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import  { Palam_get,Db_date_func} from '../sub_method/Sub_Function.js'

// 処理内容コンポーネント
export const Shori_Process = () => {
    // 処理内容のパラメータの取得
   const shori_naiyo =  Palam_get("shori_naiyo");
    // DB取得
   const Db_Get_Date = Db_date_func('/company_process')
   const Db_Get_Date_shoai = Db_date_func('/company_process_shosai')

    return (
            <table>
                {

                    Db_Get_Date.map((Db_date) =>
                        {
                            if (shori_naiyo == Db_date.shori_path) {
                                return (
                                    // onclickは無名関数を使用
                                    <tr>
                                        <thead>
                                            <th><Link to={'/Shori_Company?bu_name=' + Db_date.class_name + '&company_path=' + Db_date.company_path + "&shori_naiyo=" + Db_date.shori_path}><h5>{Db_date.shori_title_main_id} {Db_date.shori_naiyo_content}（{Db_date.play_time}）</h5></Link></th>
                                        </thead>

                                        {
                                            Db_Get_Date_shoai.map((Db_date_shosai) =>
                                                {
                                                    if (shori_naiyo == Db_date_shosai.shori_path) {
                                                        if (Db_date.shori_title_main_id == Db_date_shosai.shori_title_main_id) {
                                                            return (
                                                                // onclickは無名関数を使用
                                                                <tr>
                                                                    <td><p>{Db_date_shosai.shori_content}</p></td>
                                                                </tr>
                                                            );
                                                        }
                                                    }
                                                }
                                            )
                                        }

                                    </tr>
                                );
                            }
                        }
                    )

                }
            </table>
    )
}
