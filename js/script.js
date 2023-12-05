
let phrases = [
  'Если бы ты должна была участвовать в реалити-шоу, то какое выбрала бы?',
  'Ты когда-нибудь писал/а в бассейне/море?',
  'Ты когда-нибудь пускал/а газы в лифте?',
  'Что ты делал/а, когда была пьянее всего в жизни?',
  'Ты когда-нибудь нарушал/а закон?',
  'Какой самый неловкий поступок ты совершила?',
  'Ты ковыряешь нос?',
  'Какой самый неловкий момент происходил с тобой на людях?',
  'Ты когда-нибудь громко пукал на людях?',
  'Ты был/а в общественном туалете и справлял большую нужду, и понял, что закончилась туалетная бумага. Что ты будешь делать?',
  'Ты дружила с кем-нибудь ради выгоды?',
  'Что было самой большой ошибкой в твоей жизни?',
  'Ты пускаешь слюни во сне?',
  'Как бы ты оценил/а свою внешность по шкале от 1 до 10?',
  'У тебя были проблемы с законом?',
  'Ты когда-нибудь пукал и обвинял кого-то другого?',
  'Если бы было разрешено выйти замуж/жениться больше, чем на одном человеке, сделал/а бы ты это? За кого?',
  'Если бы тебе пришлось слушать одну песню до конца своей жизни, что бы это было?',
  'Что бы ты выбрал/а: жить без Интернета или отопления?',
  'Каким было твое худшее свидание?',
  'Если бы ты внезапно стал невидимым, что бы ты сделал?',
  'Что бы ты выбрал: чтобы тебя застали ковыряющимся в носу или в попе?',
  'Ты писал в душе?',
  'Расскажи о самом неловком моменте, который произошел у тебя с твоим парнем/девушкой?',
  'Ты когда-нибудь притворялся больным, чтобы не идти в школу или на работу?',
  'Сколько селфи ты делаешь в день?',
  'Какие трусы ты предпочитаешь носить?',
  'О чем был твой самый странный сон?',
  'Каким было твое лучшее свидание?',
  'Какое самое большое заблуждение о тебе есть у других людей?',
  'Что ты хотела бы, чтобы все знали о тебе?',
  'Какой совет из тех, что тебе дали, был лучшим?',
  'Ты когда-нибудь передаривала подарки?',
  'Если бы тебе надо было вычеркнуть из жизни одного человека, кого ты выбрала бы?',
  'Кого из членов семьи ты больше всего любишь?',
  'Какой самый странный слух о тебе придумывали люди?',
  'Какой была самая глупая причина твоего опоздания?',
  'На что бы ты потратил/а миллион рублей?',
  'Какие три желания ты загадала бы джину?',
  'Кому ты пишешь сообщения чаще всего?',
  'Когда вы плакали в последний раз?',
  'Самая позорная фотография?',
  'Что вы думаете о реинкарнации?',
  'Какой самый глупый поступок вы совершили в подростковом возрасте?',
  'Сколько вам было лет, когда вы впервые попробовали алкоголь?',
  'Если бы вы снялись в романтическом фильме, каким бы он был?',
  'Сколько вам было лет, когда у вас был первый поцелуй?',
  'Делились ли вы когда-нибудь чужим секретом?',
  'Что бы вы предпочли — способность становиться невидимым или летать?',
  'Кем бы предпочли быть — супергероем или суперзлодеем?',
  'Что бы предпочли: свободно говорить на всех языках или управлять стихиями?',
  'Есть ли поступок, о котором вы потом пожалели и до сих пор чувствуете вину?',
  'Приходилось ли вам когда-нибудь говорить настолько большую ложь, что от нее невозможно было отказаться?',
  'Вы бы предпочли: иметь возможность повернуть время вспять, или увидеть будущее?',
  'Что самое странное, что вы когда-либо делали перед зеркалом?',
  'Как долго вы обходились без душа?',
  'Как долго вы обходитесь без чистки зубов?',
  'Вы храпите?',
  'Вы едите пищу, которая упала на пол?',
  'С тобой случались паранормальные или сверхъестественные явления?',
  'Бывало спонтанное путешествие?',
  'Обращалась когда-нибудь за предсказаниями к гадалке?',
  'Какой самый неожиданный подарок тебе делали?',
  'Тебя бросали по СМС?',
  'Ты бросал(а) кого-нибудь по СМС?',
  'Сколько раз тебе разбивали сердце?',
  'Ты когда-нибудь врал(а), чтобы расстаться с человеком?',
  'Нравились ли тебе два человека сразу одинаково сильно?',
  'Планируешь ли ты вступить в брак с человеком, с которым сейчас находишься в отношениях?',
  'Тебе когда-нибудь нравилась вторая половина близкого друга/подруги?',
  'Самое романтическое свидание в твоей жизни?',
  'Сколько времени тебе нужно, чтобы пережить расставание?',
  'Какую максимальную разницу в возрасте считаешь нормальной?',
  'Смог(ла) бы встречаться с кем-то на 20 лет старше?',
  'Тебя отвергали когда-нибудь после признания в любви?',
  'Как звали твою первую любовь?',
  'Твой первый поцелуй был по любви?',
  'Твой первый секс был по любви?',
  'Врал(а) ли ты когда-нибудь о себе, чтобы понравиться кому-то на свидании?',
  'Сколько тебе было лет, когда ты первый раз влюбился/ась в какую-нибудь знаменитость?',
  'Если ты изменишь любимому человеку, ты расскажешь правду?',
  'Какое самое короткое время у тебя было между знакомством и первым поцелуем?',
  'Как ты относишься к служебным романам и случалось ли тебе их избегать?',
  'Приходилось ли сбегать со свидания вслепую и что тебе потом писали в след?',
  'Ты согласишься, что твоя жена или муж должны быть такими же, как твои родители?',
  'Согласишься ли ты изменить стиль одежды ради своей второй половинки?',
  'Согласишься ли ты похудеть/потолстеть ради своей второй половинки?',
  'Хотелось бы тебе вступить в брак, сохранив невинность?',
  'Случается ли тебе врать о росте или возрасте, чтобы добиться встречи?',
  'Была ли у тебя когда-нибудь страстная любовь в адрес чужого мужа или жены?',
  'Будешь ли ты устраивать партнеру скандал, если кто-то начнет его или ее лайкать в соцсетях?',
  'Какой был срок у самого короткого из твоих романов?',
  'Раздражают ли тебя цветы на первом свидании и что делать, если мешает букет?',
  'Опиши свое идеальное свидание.',
  'Была ли влюбленность в учителя/учительницу?',
  'Как далеко тебе приходилось зайти в попытках влюбить кого-то в себя?',
  'Была ли у тебя любовь с первого взгляда?',
  'Приходилось ли тебе получать признание в любви от лучшего друга?',
  'Ты бы выдержал(а) отношения на расстоянии?',
  'Самое неподобающее место, в котором тебе приходилось справлять нужду?',
  'Что ты чувствуешь, когда кто-то в транспорте через плечо читает твою переписку?',
  'Если ты в темноте спотыкаешься о кошку, каким словом ты ее называешь?',
  'Какой части тела чаще всего делает комплименты противоположный пол?',
  'Какая знаменитость по твоему мнению могла бы стать суперпопулярной в фильмах для взрослых.',
  'Как относишься к ролевым играм?',
  'Тебе бы хотелось сняться в порно? Какого жанра?',
  'Сколько порноактеров ты знаешь?',
  'Пробовал(а) ли ты ходить без нижнего белья в общественных местах, на работе?',
  'Кто из персонажей «Гарри Поттера» сексуальнее всех?',
  'Самое сексуальное качество в парне/девушке?',
  'Приходилось ли тебе участвовать в эротической фотосессии?',
  'К тебе когда-нибудь подкатывали представители твоего пола?',
  'Случается ли тебе врать о росте или возрасте, чтобы добиться встречи?',
  'Какой самый долгий срок, который пришлось восстанавливаться после неудачного романа?',
  'Была ли у тебя когда-нибудь страстная любовь (скрытая?) в адрес чужого мужа или жены?',
  'Будешь ли ты устраивать партнеру скандал, если кто-то начнет его или ее лайкать в соцсетях?',
  'Какой был срок у самого короткого из твоих романов?',
  'С тобой когда-нибудь пытались пообщаться новые девушки или парни твоих бывших?',
  'Раздражают ли тебя цветы на первом свидании и что делать, если мешает букет?',
  'Ты веришь в возможность настоящей любви между людьми одного пола?',
  'Будешь ли ты спрашивать у родителей разрешения на то, чтобы жениться или выйти замуж?',
  'Ты согласишься полностью изменить свой имидж ради желания любимого человека?',
  'Ты согласишься сменить религию ради того, чтобы вступить в брак?',
  'Случалось ли тебе не понравиться родителям любимого человека и как они это выразили?',
  'Согласишься ли ты на счастливую жизнь с любимым человеком без детей?',
  'Сможешь ли ты искренне пожелать кому-то счастья с другим, если сам не пара этому человеку?',
  'Тебе когда-нибудь пригождались советы бабушки и дедушки в личной жизни?',
  'Твое самое большое разочарование при первом свидании, что произошло и можно ли было спасти ситуацию?',
  'Через какое время после удачного свидания ты считаешь нормальным перезвонить и написать?',
  'Были ли у тебя попытки добраться к сердцу любимой половинки через желудок?',
  'Возможны ли для тебя отношения на расстоянии только через гаджеты по интернету?',
  'Если ты не нравишься любимому человеку, избавишь его от себя или будешь лезть до последнего?',
  'Каким должен быть твой супруг, глупее тебя или умнее, чтобы брак оказался счастливым?',
  'Можешь ли ты настолько влюбиться, что изменишь своим принципам?',
  'Брак это любовь на всю жизнь или совместный проект по организации жизни?',
  'Говоришь ли ты правду о том, почему решаешь кого-то бросить или придумываешь что-нибудь?',
  'Ты часто вспоминаешь о своей первой любви и надеешься на случайную встречу?',
  'Сколько времени должно пройти от первого знакомства до знакомства с родителями?',
  'Хотела бы ты прожить всю жизнь без любви, но в комфорте и достатке?',
  'Опиши свое идеальное свидание.',
  'Была ли влюбленность в учителя/учительницу?',
  'Как далеко тебе приходилось зайти в попытках влюбить кого-то в себя?',
  'Была ли у тебя любовь с первого взгляда?',
  'Приходилось ли тебе получать признание в любви от лучшего друга?',
  'Приходилось ли тебе признаваться в любви лучшему другу?',
  'Были ли у тебя отношения, о которых ты жалеешь до сих пор?',
  'Какая мечта разочаровала тебя после того, как осуществилась в реальности?',
  'Как ты выкрутишься, если тебя захочет поцеловать любовь твоей жизни, а от тебя пахнет луком?',
  'Как ты выкрутишься, если тебя захочет поцеловать любовь твоей жизни, а от тебя пахнет луком?',
  'В каком месте твоего дома лежит сейчас пакет с пакетами?',
  'Случалось ли тебе заснуть на уроке, на работе или на лекции в университете?',
  'Сколько лет у тебя не вытерта пыль на верхних кухонных шкафчиках?',
  'Какое было твое самое нелюбимое упражнение на физкультуре?',
  'Стаскиваешь ли ты во сне одеяло на себя со своего соседа?',
  'Назови известного актера, который тебя бесит потому что у вас есть какое-то сходство?',
  'Если твой кот будет орать ночью, чем ты в него бросишь, чтоб замолчал?',
  'Каким хитрым способом ты заканчиваешь романтическую прогулку, если надоело гулять?',
  'Какую букву у тебя в детстве не получалось выговаривать дольше всего?',
  'Какого врача в поликлинике ты боишься больше всех остальных?',
  'Назови животное, с которым у тебя есть внешнее сходство и с которым тебя сравнивают.',
  'Какого цвета твои трусы?',
  'Было ли такое, что после вечеринки ты ничего не помнил(а), а когда тебе рассказывали события прошлой ночи, тебе хотелось провалиться сквозь землю?',
  'В чем ты спишь?',
  'Сколько селфи тебе нужно сделать, чтобы получилось что-то достойное?',
  'Твой самый бесполезный навык?',
  'Тебе приходилось пробовать корм для домашних животных?',
  'Самое глупое оправдание, чтобы сбежать с неудачного свидания?',
  'На какой факультет Гриффиндора тебя бы определили?',
  'Назови адрес любого сайта для взрослых, на котором пришлось побывать хотя бы раз.',
  'Хотел бы побывать на нудистском пляже?',
  'Ты всегда говоришь правду партнеру, если он спрашивает хорошо ли выглядит?',
  'Как лучше проводить отпуск, вместе или раздельно со второй половинкой?',
  'Существует ли дружба между мужчиной и женщиной?',
  'Тебе случалось оказываться в гостях в дырявых носках?',
  'Пойдешь ли ты в общественный туалет или все повезешь домой?',
  'Что самое гадкое тебе предлагали съесть в гостях, о чем ты никогда не забудешь?',
  'О каком своем промахе ты думаешь перед сном?',
];

let phrases2 = [
  'Покажи твое самое интимное фото на телефоне.',
  'Покажи свои последние пять сообщений разным людям на телефоне.',
  'Повторяй всё, что говорит человек слева, пока снова не придет твоя очередь играть.',
  'Попробуй засунуть в рот все пальцы ноги',
  'Попробуй лизнуть локоть',
  'Расскажи самую веселую историю, которую ты знаешь',
  'Попытайся расплакаться при всех',
  'Скажи всем про себя две правды и одну ложь, чтобы игроки угадали, что именно — обман',
  'Повтори первый танец, который увидишь в TikTok/Ютуб',
  'Съешь или выпей что-то, не используя руки',
  'Станцуй танго с любым предметом из комнаты',
  'Хвали себя перед зеркалом 1 минуту',
  'Залезь на табуретку и прочитай свое любимое стихотворение',
  'Изобрази зловещий смех',
  'Скажи комплимент каждому из присутствующих',
  'Изображай знаменитость, пока ее кто-то не угадает',
  'Три круга, обращаясь к остальным, вместо имени говори «Моя прелесть»',
  'Озвучь животного, в год которого ты родился/лась',
  'Позируй как бодибилдер 1 минуту',
  'Покажи позу, в который ты засыпаешь',
  'Исполняйте глупый танец под любимую песню в течение 1 минуты',
  'Спойте выдуманную песню о комнате, в которой вы находитесь',
  'Драматично прочитайте случайный пункт из списка продуктов',
  'Сделайте устный рекламный ролик случайного предмета в комнате',
  'Расскажите несмешной анекдот',
  'Выговорите скороговорку «на дворе трава» как можно быстрее',
  'Произнесите речь, как будто вы баллотируетесь на пост президента',
  'Притворяйтесь человеком слева от вас в течение следующих 15 минут',
  'Изобразите героя мультфильма, пусть угадают кто это',
  'Расскажите о комнате в стиле гида, как если бы это была известная достопримечательность',
  'Расскажите анекдот, держа палец в носу',
  'Драматически расскажите детское стихотворение',
  'Покажи всем кончик своего нижнего белья',
  'Изобрази первое знакомство с девушкой/парнем сидящем слева от вас',
  'Покрась один зуб черным маркером',
  'Изобразить танец воркующего голубя',
  'Станцевать как красующийся павлин',
  'Спой песню, встав в центр комнаты',
  'Съешь что нибудь, не используя руки',
  'Изобрази расстование со своим парнем/девушкой',
  'Станцуй танец живота',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

// -------- norma --------- //
let phrase = document.querySelector('.phrase');

const but = document.querySelector('.btn-true-norm');
  but.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-red');
    element.classList.add('question-blue');

    let rand = phrases.splice(Math.floor(Math.random() * phrases.length), 1);
    phrase.innerText = rand;
  });

const but2 = document.querySelector('.btn-action-norm');
  but2.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-blue');
    element.classList.add('question-red');

    let rand = phrases2.splice(Math.floor(Math.random() * phrases2.length), 1);
    phrase.innerText = rand;
  });
// -------- / norma --------- //




  