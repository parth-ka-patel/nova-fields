Nova.booting((Vue, router) => {
  /** Shared */
  Vue.component('r64-default-field', require('./components/DefaultField'))
  Vue.component('r64-panel-item', require('./components/PanelItem'))
  Vue.component('r64-excerpt', require('./components/Excerpt'))

  /** Text & Number */
  Vue.component(
    'index-nova-fields-text',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-text',
    require('./components/text/DetailField')
  )
  Vue.component('form-nova-fields-text', require('./components/text/FormField'))

  /** Slug */
  Vue.component(
    'index-nova-fields-slug',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-slug',
    require('./components/text/DetailField')
  )
  Vue.component('form-nova-fields-slug', require('./components/slug/FormField'))

  /** BooleanGroup */
  Vue.component(
      'index-nova-fields-boolean-group',
      require('./components/boolean-group/IndexField.vue')
  )
  Vue.component(
      'detail-nova-fields-boolean-group',
      require('./components/boolean-group/DetailField.vue')
  )
  Vue.component(
      'form-nova-fields-boolean-group',
      require('./components/boolean-group/FormField.vue')
  )

  /** Items */
  Vue.component('index-nova-fields-items', require('./components/items/IndexField'))
  Vue.component('detail-nova-fields-items', require('./components/items/DetailField'))
  Vue.component('form-nova-fields-items', require('./components/items/FormField'))
  Vue.component('detail-nova-fields-item', require('./components/items/DetailFieldItem'))



  /** RadioButton */
  Vue.component('index-nova-fields-radio', require('./components/radio-button/IndexField'));
  Vue.component('detail-nova-fields-radio', require('./components/radio-button/DetailField'));
  Vue.component('form-nova-fields-radio', require('./components/radio-button/FormField'));

  /** ChildSelect */
  Vue.component(
      'index-nova-fields-child-select',
      require('./components/text/IndexField')
  )
  Vue.component(
      'detail-nova-fields-child-select',
      require('./components/text/DetailField')
  )
  Vue.component('form-nova-fields-child-select', require('./components/child-select/FormField'))

  /** MultiSelect */
  Vue.component('index-nova-fields-multiselect', require('./components/multiselect/IndexField'));
  Vue.component('detail-nova-fields-multiselect', require('./components/multiselect/DetailField'));
  Vue.component('form-nova-fields-multiselect', require('./components/multiselect/FormField'));
  // Allow user to overwrite nova-multiselect-detail-field-value
  if (!Vue.options.components['nova-multiselect-detail-field-value']) {
    Vue.component(
        'nova-multiselect-detail-field-value',
        require('./components/multiselect/NovaMultiselectDetailFieldValue')
    );
  }

  /** Date */
  Vue.component(
    'index-nova-fields-date',
    require('./components/date/IndexField')
  )
  Vue.component(
    'detail-nova-fields-date',
    require('./components/date/DetailField')
  )
  Vue.component('form-nova-fields-date', require('./components/date/FormField'))

  /** DateTime */
  Vue.component(
      'index-nova-fields-date-time',
      require('./components/date-time/IndexField')
  )
  Vue.component(
      'detail-nova-fields-date-time',
      require('./components/date-time/DetailField')
  )
  Vue.component(
      'form-nova-fields-date-time',
      require('./components/date-time/FormField')
  )

  /** Computed */
  Vue.component(
    'index-nova-fields-computed',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-computed',
    require('./components/text/DetailField')
  )
  Vue.component(
    'form-nova-fields-computed',
    require('./components/computed/FormField')
  )

  /** Textarea */
  Vue.component(
    'index-nova-fields-textarea',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-textarea',
    require('./components/textarea/DetailField')
  )
  Vue.component(
    'form-nova-fields-textarea',
    require('./components/textarea/FormField')
  )

  /** Password */
  Vue.component(
    'index-nova-fields-password',
    require('./components/password/IndexField')
  )
  Vue.component(
    'detail-nova-fields-password',
    require('./components/password/DetailField')
  )
  Vue.component(
    'form-nova-fields-password',
    require('./components/password/FormField')
  )

  /** Boolean */
  Vue.component(
    'index-nova-fields-boolean',
    require('./components/boolean/IndexField')
  )
  Vue.component(
    'detail-nova-fields-boolean',
    require('./components/boolean/DetailField')
  )
  Vue.component(
    'form-nova-fields-boolean',
    require('./components/boolean/FormField')
  )

  /** Select */
  Vue.component(
    'index-nova-fields-select',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-select',
    require('./components/text/DetailField')
  )
  Vue.component(
    'form-nova-fields-select',
    require('./components/select/FormField')
  )

  /** Autocomplete */
  Vue.component(
    'index-nova-fields-autocomplete',
    require('./components/text/IndexField')
  )
  Vue.component(
    'detail-nova-fields-autocomplete',
    require('./components/text/DetailField')
  )
  Vue.component(
    'form-nova-fields-autocomplete',
    require('./components/autocomplete/FormField')
  )

  /** File & Image */
  Vue.component(
    'index-nova-fields-file',
    require('./components/file/IndexField')
  )
  Vue.component(
    'detail-nova-fields-file',
    require('./components/file/DetailField')
  )
  Vue.component('form-nova-fields-file', require('./components/file/FormField'))

  /** Trix */
  Vue.component(
    'detail-nova-fields-trix',
    require('./components/textarea/DetailField')
  )
  Vue.component('form-nova-fields-trix', require('./components/trix/FormField'))

  /** R64 Fields */

  /** Row */
  Vue.component('index-nova-fields-row', require('./components/row/IndexField'))
  Vue.component(
    'detail-nova-fields-row',
    require('./components/row/DetailField')
  )
  Vue.component('form-nova-fields-row', require('./components/row/FormField'))

  /** JSON */
  Vue.component(
    'index-nova-fields-json',
    require('./components/json/IndexField')
  )
  Vue.component(
    'detail-nova-fields-json',
    require('./components/json/DetailField')
  )
  Vue.component('form-nova-fields-json', require('./components/json/FormField'))

  /** RELATIONS */

  /** BelongsTo */
  Vue.component(
    'index-nova-fields-belongs-to',
    require('./components/belongs-to/IndexField')
  )
  Vue.component(
    'detail-nova-fields-belongs-to',
    require('./components/belongs-to/DetailField')
  )
  Vue.component(
    'form-nova-fields-belongs-to',
    require('./components/belongs-to/FormField')
  )
})
