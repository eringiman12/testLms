import React, { Fragment, useRef, useEffect, useState } from 'react'
import { useParams, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Company_drawing } from './Draw_Area/Company_drawing.jsx'
import { Process_naiyo } from './Draw_Area/Process_naiyo.jsx'
import { Shori_Process } from './Draw_Area/Shori_Process.jsx'
import  { Palam_get, } from './sub_method/Sub_Function.js'


export const Home = (props) => {
   // ref属性の定義
   const el = useRef(null);

   // 部署パラメータ取得
   const bu_name = Palam_get("bu_name");
   // 選択企業パラメータ取得
   const company_path = Palam_get("company_path");
   // 選択企業パラメータ取得
   const shori_path = Palam_get("shori_naiyo");

   // 部署要素
   const Elements_Ary = {
      "iryo": "医療部",
   };

   return (
      <Fragment>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-8">
                  <div className="card">
                     <div className="card-header">
                        <Link to={'/'}><p>MAS_LMS</p></Link>
                        <ul>
                           <li><a href='/New_regit'>新規登録</a></li>
                           <li>編集</li>
                           <li>アカウント</li>
                        </ul>
                     </div>

                     <div className="card-body">
                        <div className='busho_area'>
                           {
                              (() => {
                                 for (var key in Elements_Ary) {
                                    var val = Elements_Ary[key];
                                    return (
                                       // <p className='sentakued'>選択されていません</p>
                                       <div className='busho_name' ref={el} id={key}>
                                          <div className={key}>
                                             <Link to={'/Shori_Company?bu_name=' + key}><p>{val}</p></Link>
                                          </div>
                                          {/* 部署の選択状況 */}
                                          {
                                             (() => {
                                                if (bu_name == key) {
                                                    if (company_path != null) {
                                                        if (shori_path !=null) {
                                                            return (
                                                                <Fragment>
                                                                    {/* <div className='Company_yoso_iryo' id="Company_yoso_iryo">
                                                                       <Link to={'/Shori_Company?bu_name=' + key}><p>顧客選択</p></Link>
                                                                   </div> */}
                                                                   <div className='Company_yoso_name' id="Company_yoso_iryo">
                                                                       <Link to={'/Shori_Company?bu_name=' + key + '&company_path=' + company_path}><p>{sessionStorage.getItem('company_name')}</p></Link>
                                                                   </div>
                                                                   <div className='Company_yoso_shori_name' id="Company_yoso_iryo">
                                                                       <Link to={'/Shori_Company?bu_name=' + key + '&company_path=' + company_path}><p>{sessionStorage.getItem('shori_name')}</p></Link>
                                                                   </div>
                                                               </Fragment>
                                                           );
                                                        } else {

                                                                return (

                                                                    <Fragment>
                                                                        {/* <div className='Company_yoso_iryo' id="Company_yoso_iryo">
                                                                           <Link to={'/Shori_Company?bu_name=' + key}><p>顧客選択</p></Link>
                                                                       </div> */}
                                                                       <div className='Company_yoso_name' id="Company_yoso_iryo">
                                                                           <Link to={'/Shori_Company?bu_name=' + key + '&company_path=' + company_path}><p>{sessionStorage.getItem('company_name')}</p></Link>
                                                                       </div>
                                                                   </Fragment>
                                                               );


                                                        }

                                                    }
                                                    //  else {
                                                    //     return (
                                                    //         // <div className='Company_yoso_iryo' id="Company_yoso_iryo">
                                                    //         //    <Link to={'/Shori_Company?bu_name=' + key}><p>顧客選択</p></Link>
                                                    //         // </div>
                                                    //      );
                                                    // }

                                                }
                                             })()
                                          }
                                       </div>
                                    );
                                 }
                              })()
                           }
                        </div>

                         {/* 描画エリアの要素 */}
                        <div className='drawing_Area' id="drawing_Area">
                           {
                              (() => {
                                 if (bu_name == null) {
                                    return (
                                        <div className="regit_judge">
                                            <p className="regit_p">選択されていません。</p>
                                        </div>

                                    );
                                 } else {
                                     if (company_path != null) {
                                         if (shori_path != null) {
                                            return (
                                                <Shori_Process />
                                             );
                                         } else {
                                            return (
                                                <Process_naiyo />
                                             );
                                         }

                                     } else {
                                        return (
                                            <Company_drawing />
                                         );
                                     }

                                 }
                              })()
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </Fragment>

   )



}

