function displayCanvas() {
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);

    //������ ��������� ������ � ������� �����
    var radiusClock = canvasHTML.width / 2 - 3;
    var xCenterClock = canvasHTML.width / 2;
    var yCenterClock = canvasHTML.height / 2;

    //������� ������. 
    contextHTML.fillStyle = "#ffffff";
    contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);

    //������ ������ �����
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 0.5;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.stroke();
    contextHTML.closePath();

    //������ ������� �����
    var radiusNum = radiusClock - 3;   //������ ������������ �������   
    var radiusPoint;
    for (var tm = 0; tm < 60; tm++) {
        contextHTML.beginPath();
        if (tm % 5 == 0) {
            radiusPoint = 2;
        }
        else {
            radiusPoint = 1;
        } //��� ��������� ������� �������
        var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        var yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
        contextHTML.stroke();
        contextHTML.closePath();
    }

    //��������� ���������� �����
    for (var th = 1; th <= 12; th++) {
        contextHTML.beginPath();
        contextHTML.font = 'bold 9px sans-serif';
        var xText = xCenterClock + (radiusNum - 7.5) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
        var yText = yCenterClock - (radiusNum - 7.5) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
        if (th <= 9) {
            contextHTML.strokeText(th, xText - 2, yText + 3);
        } else {
            contextHTML.strokeText(th, xText - 4, yText + 3);
        }
        contextHTML.stroke();
        contextHTML.closePath();
    }

    //������ �������
    var lengthSeconds = radiusNum - 3;
    var lengthMinutes = radiusNum - 4;
    var lengthHour = lengthMinutes / 2;
    var d = new Date();   //�������� ��������� ����
    var t_sec = 6 * d.getSeconds();   //���������� ���� ��� ������
    var t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //���������� ���� ��� �����
    var t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //���������� ���� ��� �����

    //������ �������
    contextHTML.beginPath();
    contextHTML.strokeStyle = "#FF0000";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
        yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //������ ������
    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 1;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
        yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //������ ����
    contextHTML.beginPath();
    contextHTML.lineWidth = 1;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
        yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //������ ����� �����
    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.fillStyle = "#ffffff";
    contextHTML.lineWidth = 1;
    contextHTML.arc(xCenterClock, yCenterClock, 1, 0, 2 * Math.PI, true);
    contextHTML.stroke();
    contextHTML.fill();
    contextHTML.closePath();

    return;
}


window.setInterval(
    function () {

        displayCanvas();
    }
    , 1000);