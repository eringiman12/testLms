<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.13.10/dist/css/uikit.min.css" />

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.13.10/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.13.10/dist/js/uikit-icons.min.js"></script>
    <title>Mas_LMS 新規登録</title>

</head>
   <body>
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <a href="/"><p>MAS_LMS</p></a>
                        <ul>
                            <li><a href='/New_regit'>新規登録</a></li>
                            <li>編集</li>
                            <li>アカウント</li>
                        </ul>
                    </div>

                    <div class="Regit_Area">
                        <div class="Edit">
                            <form action="/">
                                <table class="uk-table uk-table-middle uk-table-divider">
                                    <tbody>
                                        <tr>
                                            <td class="Title_Td">部署名</td>
                                            <td>
                                                <select id="busho_name">
                                                    <option value=""></option>
                                                    @foreach($DB_Bu as $key => $value)
                                                        <option value="{{$value->id}}_{{$value->class_name}}">{{$value->bu_name}}</option>
                                                    @endforeach
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="Title_Td">商号名</td>
                                            <td>
                                                <input type="hidden" value="" id="company_id">
                                                <input type="text" id="com_name">
                                                <input uk-toggle="target: #my-id" type="button" class="shogo_call" id="shogo_call" value="呼び出し">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="Title_Td">処理タイトル</td>
                                            {{-- <td><input type="text" id="process_text"><input type="button" id="add_process" value="追加"></td> --}}
                                            {{-- <td><input type="text" id="process_text"></td> --}}

                                            <td>
                                                <div class="shori_naiyo">
                                                    @foreach($DB_nai as $key => $value)
                                                        <input type="hidden" value="{{$value->company_id}}_{{$value->shori_name}}" class="shori_naiyo_in" >
                                                    @endforeach
                                                    <input type="text" id="process_text_title">
                                                </div>

                                            </td>
                                        </tr>
                                        {{-- <tr>
                                            <td colspan="2" class="shori_box">
                                                <div class="Shori_content_box" id="Shori_content_box">
                                                </div>
                                            </td>
                                        </tr> --}}
                                        <tr>
                                            <td class="Title_Td">処理内容タイトル</td>
                                            <td>
                                                {{-- <input type="button" id="process_naiyo_dai_add" value="追加">
                                                <div id="process_naiyo_dai_ele">
                                                    <input type="text" id="process_naiyo_dai_text">

                                                </div> --}}
                                                <input type="text" id="process_naiyo_dai_text">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="Title_Td">処理内容名</td>
                                            {{-- <td><input type="text" id="process_naiyo_sho_text"></td> --}}
                                            <td><input type="text" id="process_text"><input type="button" id="add_process" value="追加"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="shori_box">
                                                <div class="Shori_content_box" id="Shori_content_box">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div id="my-id" uk-modal>
                                    <div class="Modal_element uk-modal-dialog">
                                         <input type="text">
                                        <div class="company_name uk-modal-body" id="company_name">

                                            @foreach($DB_SQL as $key => $value)
                                                <input type="button" value="{{$value->company_name}}" class="com_{{$value->bu_id}}" id="com_val_{{$key}}" onclick="com_sel('com_val_{{$key}}','{{$value->id}}')">
                                                {{-- <span class="com_{{$value->bu_id}}"><p>{{$value->company_name}}</p></span> --}}
                                            @endforeach
                                        </div>
                                        <div class="company_name uk-modal-body" id="fal">
                                            <p>部署が選択されていません。</p>
                                        </div>
                                    </div>
                                </div>
                                {{-- <table class="uk-table uk-table-middle uk-table-divider">
                                    <tbody>
                                        <tr>
                                            <td class="Title_Td">処理タイトル選択</td>
                                            <td>
                                                <select id="shori_naiyo">
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="Title_Td">処理内容タイトル</td>
                                            <td>
                                                <input type="button" id="process_naiyo_dai_add" value="追加">
                                                <div id="process_naiyo_dai_ele">
                                                    <input type="text" id="process_naiyo_dai_text">

                                                </div>
                                                <input type="text" id="process_naiyo_dai_text">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="Title_Td">処理内容名</td>
                                            <td><input type="text" id="process_naiyo_sho_text"></td>
                                        </tr>
                                    </tbody>
                                </table> --}}
                                <button>追加</button>
                            </form>
                        </div>
                        <div class="hyoji">
                            <table>
                                <tr>
                                    <th>部署名</th>
                                    <th>商号名</th>
                                </tr>
                            </table>
                            @foreach($DB_SQL as $key => $value)
                                <p>{{$value->bu_name}}</p>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
      <script src="{{ asset('js/etc.js') }}"></script>
   </body>
</html>
