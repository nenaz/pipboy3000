var MPersonModel = Backbone.Model.extend({
	defaults : {
		'login' : 'nenaz',
		'name' : 'grian'
	}
});

var VPersonView = Backbone.View.extend({
	className : 'main-model',
	id : 'model1',
	el : 'div',
	template : _.template($('#id_special').html()),
	initialize : function(){
		console.log('initialize');
		var self = this;
		
		self.render();
		self.bindLink();
		self.sysBattery();
		self.sysTime();
	},
	
	/*
	* реагировать только на элементы с классом touched
	*/
	bindLink : function(){
		console.log('bindLink');
		var self = this;
		$(document).on('touchstart', '.touched', function(e){
			var link = $(this);
			
			self.bindActions(link);
		});
	},
	
	/*
	* навешивание действий на кликабельные элементы
	*/
	bindActions : function(link){
		console.log('bindActions');
		var self = this,
			newNumTab = link.attr('data-num'),
			oldNumTab = $('.down_abs_block').find('.block_item_active').attr('data-num'),
			data = {};
			
		$('.block_item_active').removeClass('block_item_active');
		$('.main_body_block_active').removeClass('main_body_block_active').addClass('no_active');
		$('[data-num='+newNumTab+']').addClass('block_item_active');
		$('[data-pic='+newNumTab+']').addClass('main_body_block_active').removeClass('no_active');
				
		switch (newNumTab){
			case '2':
				data.force = {'title' : 'Сила', 'count' : 5};
				data.perception = {'title' : 'Восприятие', 'count' : 6};
				data.endurance = {'title' : 'Выносливость', 'count' : 5};
				data.charisma = {'title' : 'Харизма', 'count' : 6};
				data.intelligence = {'title' : 'Интеллект', 'count' : 6};
				data.agility = {'title' : 'Ловкость', 'count' : 5};
				data.luck = {'title' : 'Удача', 'count' : 7};
				if(self.templateIdSpecial === undefined){
					self.templateIdSpecial = _.template($('#id_special').html());
				}
				this.template = self.templateIdSpecial;
				$('#model1').html(this.template(data));
			break;
			case '3':
				data.Barter = {'title' : 'Бартер', 'count' : 5};
				data.unarmed = {'title' : 'Без оружия', 'count' : 6};
				data.Hacking = {'title' : 'Взлом', 'count' : 5};
				data.Explosives = {'title' : 'Взрывчатка', 'count' : 6};
				data.Survival = {'title' : 'Выживание', 'count' : 6};
				data.Eloquence = {'title' : 'Красноречие', 'count' : 5};
				data.Medicine = {'title' : 'Медицина', 'count' : 7};
				data.Science = {'title' : 'Наука', 'count' : 7};
				data.Weapons = {'title' : 'Оружие', 'count' : 7};
				if(self.templateIdSkills === undefined){
					self.templateIdSkills = _.template($('#id_skills').html());
				}
				this.template = self.templateIdSkills;
				$('#model2').html(this.template(data));
			break;
			case '4':
				data.Barter = {'title' : 'Бартер', 'count' : 5};
				data.unarmed = {'title' : 'Без оружия', 'count' : 6};
				data.Hacking = {'title' : 'Взлом', 'count' : 5};
				data.Explosives = {'title' : 'Взрывчатка', 'count' : 6};
				data.Survival = {'title' : 'Выживание', 'count' : 6};
				data.Eloquence = {'title' : 'Красноречие', 'count' : 5};
				data.Medicine = {'title' : 'Медицина', 'count' : 7};
				data.Science = {'title' : 'Наука', 'count' : 7};
				data.Weapons = {'title' : 'Оружие', 'count' : 7};
				if(self.templateIdPerks === undefined){
					self.templateIdPerks = _.template($('#id_perks').html());
				}
				this.template = self.templateIdPerks;
				$('#model3').html(this.template(data));
			break;
		}
	},
	
	/*
	* системное время
	*/
	sysTime : function(){
		setInterval(function(){
			var date = new Date(),
				h = date.getHours(),
				m = date.getMinutes(),
				s = date.getSeconds();
				
			if(h < 10){
				h = '0'+String(h);
			}
			if(m < 10){
				m = '0'+String(m);
			}
			if(s < 10){
				s = '0'+String(s);
			}
			$('#now_time').text(h+':'+m+':'+s);
		}, 1000);
	},
	
	/*
	* подключение к Battery API(подключение к зарядке, время до полной зарядки,
	* время до полной разрядки, текущий уровень заряда)
	*/
	sysBattery : function(){
		var self = this,
			battery;
		
		if(navigator.mozBattery !== undefined){
			battery = new mozBattery();
			$('#battery_level').text(Math.round(battery.level * 100) + "/100");
		}else{
			console.log('!!! battery API not supported !!!');
			return;
		}
	},
	
	/*
	* отрисовка шаблона
	*/
	render : function(){
		console.log('render');
		var self = this;
		
		
	}
});

var globalApp = {};
var mperson = new MPersonModel();
var vperson = new VPersonView({model : mperson});
globalApp.models = {};
globalApp.views = {};
globalApp.models.mperson = mperson;
globalApp.views.vperson = vperson;