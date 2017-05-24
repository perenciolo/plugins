Name: Snappy List Builder

Plugin URI:  http://www.blackowl.com.br

Description: The ultimate email list building plugin for wordpress. Capture new subscribers. Reward subscribers 
with a custom download upon opt-in. Build unlimited lists. Import and export subscribers easily with .csv

Version: 1.0

Author: Gustavo Perenciolo @ blackowl

Author URI: https://github.com/perenciolo/

License: GPL2

License URI: https://www.gnu.org/licenses/gpl-2.0.html

Text Domain: br.com.blackowl.snappy-list-builder


# !0. TABLE OF CONTENTS 


# 1. HOOKS
    1.1 - registers all our custom shortcodes on init
    1.2 - register custom admin column headers 
    1.3 - register custom admin column data 
    1.4 - register ajax actions 
    1.5 - load external files to public website
    1.6 - Advanced custom fields Settings
    1.7 - register our custom menus
    1.8 - load external files in WordPress admin  

# 2. SHORTCODES
    2.1 - slb_register_shortcodes()
    2.2 - slb_form_shortcode()

# 3. FILTERS
    3.1 - slb_subscriber_column_headers()
    3.2 - slb_subscriber_column_data()
        3.2.1 - slb_register_custom_admin_titles()
        3.2.2  - slb_custom_admin_titles()
    3.3 - slb_list_column_headers()
    3.4 - slb_list_column_data()
    3.5 - slb_admin_menus()

# 4. EXTERNAL SCRIPTS
    4.1 - Include ACF 
    4.2 - slb_public_scripts()
    4.3 - slb_admin_scripts()

# 5. ACTIONS
    5.1 - slb_save_subscription()
    5.2 - slb_save_subscriber()
    5.3 - slb_add_subscription()

# 6. HELPERS
    6.1 - slb_subscriber_has_subscription()
    6.2 - slb_get_subscriber_id()
    6.3 - slb_get_subscriptions()
    6.4 - slb_return_json()
    6.5 - slb_get_acf_key()
    6.6 - slb_get_subscriber_data()

# 7. CUSTOM POST TYPES
    7.1 - Include subscribers post type
    7.2 - Include lists custom post type

# 8. ADMIN PAGES
    8.1 - slb_dashboard_admin_page()
    8.2 - slb_import_admin_page()
    8.3 - slb_options_admin_page()
    
# 9. SETTINGS
