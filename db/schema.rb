# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_08_181028) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assessments", force: :cascade do |t|
    t.date "assessment_date"
    t.string "assessed_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "construct_id"
  end

  create_table "constructs", force: :cascade do |t|
    t.string "name"
  end

  create_table "domains", force: :cascade do |t|
    t.string "title"
    t.integer "construct_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "question"
    t.integer "domain_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scores", force: :cascade do |t|
    t.integer "value"
    t.integer "assessment_id"
    t.integer "item_id"
    t.boolean "confidential"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assessments", "constructs"
  add_foreign_key "items", "domains"
  add_foreign_key "scores", "assessments"
  add_foreign_key "scores", "items"
end
