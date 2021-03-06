# frozen_string_literal: true

require 'acceptance_helper'
require 'feature'

feature 'Index Page' do
  scenario 'has cans homepage and can logout' do
    login
    expect(page).to have_content('CANS')
    logout
    expect(page).not_to have_content('CANS')
  end
end
