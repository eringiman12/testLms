<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LMS_Controller extends Controller
{
    protected static $Def_Sql = "SELECT * FROM `mst_busho` as busho LEFT JOIN mst_company as company ON busho.id = company.bu_id";
    protected static $Process_Sql = " LEFT JOIN mst_shori_naiyo as shori_naiyo ON shori_naiyo.company_id = company.id LEFT JOIN mst_shori_title as shori_title ON shori_naiyo.id = shori_title.shorinaiyo_id";
    protected static $shosai_Sql = " LEFT JOIN mst_shori_shosai as shori_shosai ON shori_title.shori_title_main_id  = shori_shosai.shori_title_id";

    public function DB_get()
    {
        if (!empty($_GET["bu_name"])) {
            $Sql_process = self::$Def_Sql . " where busho.class_name='" . $_GET["bu_name"] . "'";
        } else {
            $Sql_process = self::$Def_Sql;
        }
        $DB_Get = DB::select($Sql_process);
        return response()->json($DB_Get);
    }

    public function DB_get_process()
    {
        if (!empty($_GET["company_path"])) {
            $Sql_process = self::$Def_Sql . self::$Process_Sql . " where busho.class_name='" . $_GET["bu_name"] . "' AND company.company_path='" . $_GET["company_path"] . "'";
        } else {
            $Sql_process = self::$Def_Sql . self::$Process_Sql;
        }
        $DB_Get = DB::select($Sql_process);
        return response()->json($DB_Get);
    }

    public function DB_get_process_shosai()
    {
        $DB_Get = DB::select(self::$Def_Sql . self::$Process_Sql . self::$shosai_Sql);
        return response()->json($DB_Get);
    }

    public function index()
    {
        return view('app');
    }

    public function Process_toroku()
    {
        $DB_Bu = DB::select("SELECT * FROM `mst_busho`");
        $DB_nai = DB::select("SELECT * FROM `mst_shori_naiyo`");
        $DB_Get = DB::select(self::$Def_Sql);
        return view('Process_Regit', [
            "DB_Bu" => $DB_Bu,
            "DB_SQL" => $DB_Get,
            "DB_nai" => $DB_nai
        ]);
    }
}
