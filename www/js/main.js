var MPersonModel = Backbone.Model.extend({
	defaults : {
		'login' : 'nenaz',
		'name' : 'grian'
	}
});

var VPersonView = Backbone.View.extend({
	className : 'main-model',
	id : 'model1',
	tagName : 'ul',
	initialize : function(){
		console.log('initialize');
		var self = this;
		
		self.render();
		self.bindLink();
	},
	bindLink : function(){
		console.log('bindLink');
		var self = this;
		$(document).on('touchstart', '.touched', function(e){
			var link = $(this);
			
			self.bindActions(link);
		});
	},
	bindActions : function(link){
		console.log('bindActions');
		var self = this;
		
		$('.down_abs_block').find('.block_item_active').removeClass('block_item_active');
		link.addClass('block_item_active');
		
		if(link.hasClass('id_special')){
			console.log('special');
			// $('#id_status').removeClass('active').addClass('animated fadeOutLeft no_active');
			// $('#id_special').removeClass('no_active').addClass('animated fadeInRgiht active');
			$('#id_status').addClass('animated fadeOutLeft');
			$('#id_special').addClass('animated fadeInRight');
		}

	},
	render : function(){
		console.log('render');
		var self = this;
		
		//self.$el.html(self.model.get('name') + ' ' + self.model.get('login'));
	}
});

var mperson = new MPersonModel();
var vperson = new VPersonView({model : mperson});