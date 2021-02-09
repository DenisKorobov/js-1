//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var works = {
    a00: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
    'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
    'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    a0: 2,
    a1: '1 - Поспать до обеда\n',
    a2: '2 - Пойти прогуляться\n',
    b00: 'Вы решили поспать до обеда.\n' +
    'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
    'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    b0: 2,
    b1: '1 - Пойти прогуляться\n',
    b2: '2 - Пойти пообедать\n',
    c00: 'Вы решили пойти прогуляться.\n' +
    'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
    'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
    'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
    'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
    'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
    'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
    c0: 2,
    c1: '1 - Подождать обед в столовой\n',
    c2: '2 - Поколоть дров перед обедом\n',
    d00: 'Здесь пишем текст повествования.\n' +
    'Потом пишем несколько действий, например, два\n',
    d0: 2,
    d1: '1 - 1-й ответ\n',
    d2: '2 - 2-й ответ\n',
};

var event, answer, answers = [];

event = getAnswer(works.a0, works.a00, works.a1, works.a2);
answers.push([works.a00, works.a1, works.a2, event]);

switch (event) {
    case 1:
        event = getAnswer(works.b0, works.b00, works.b1, works.b2);
        answers.push([works.b00, works.b1, works.b2, event]);
        switch (event) {
            case 1:
                event = getAnswer(works.d0, works.d00, works.d1, works.d2);
                answers.push([works.d00, works.d1, works.d2, event]);
                break;
            case 2:
                event = getAnswer(works.d0, works.d00, works.d1, works.d2);
                answers.push([works.d00, works.d1, works.d2, event]);
                break;
            case -1:
                break;
            default:
                alert('Ошибка!');
        }
        break;
    case 2:
        event = getAnswer(works.c0, works.c00, works.c1, works.c2);
        answers.push([works.c00, works.c1, works.c2, event]);
        switch (event) {
            case 1:
                event = getAnswer(works.d0, works.d00, works.d1, works.d2);
                answers.push([works.d00, works.d1, works.d2, event]);
                break;
            case 2:
                event = getAnswer(works.d0, works.d00, works.d1, works.d2);
                answers.push([works.d00, works.d1, works.d2, event]);
                break;
            case -1:
                break;
            default:
                alert('Ошибка!');
        }
        break;
    case -1:
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру!');

event = +prompt('Введите номер вопроса:') - 1;
answer = answers[event][3];
document.write(answers[event][0] + '<br><br>Ответ: ' + answers[event][answer]);


/* ------------------------------------------------------------------ */

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

function getAnswer(quantity, text, var1, var2){
    do {
        var ok = false;
        var ans = +prompt(text + var1 + var2 + '-1 - Выход из игры');
        if (ans == -1) {
            break;
        } else {
            ok = isAnswer(quantity, ans);
        }
    } while (!ok);
    return ans;
}