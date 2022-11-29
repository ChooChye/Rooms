<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\Concerns\Interaction;
use Ramsey\Uuid\Type\Integer;

class AdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = 14;
        for($i =0; $i < $data; $i++){
            DB::table('ads')->insert([
                'ad_code' => rand(000000,999999),
                'ad_title' => Str::random(35).' For rent',
                'ad_location' => Str::random(15),
                'ad_description' => Str::random(150),
                'price' => rand(99,9999),
                'deposit' => rand(0,4),
                'utility_deposit' => rand(0,3),
                'status' => 1,
                'created_at' => Carbon::now(),
            ]);
        }
    }
}
