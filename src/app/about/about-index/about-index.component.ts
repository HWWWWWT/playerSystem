import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-index',
  templateUrl: './about-index.component.html',
  styleUrls: ['./about-index.component.css']
})
export class AboutIndexComponent implements OnInit {
  public pageinfo= {
    title: '概述',
    eng: 'summary',
    content: ['这个系统是在学习Angular的时候制作的demo，涵盖了angular核心内容，包括组件化，组件之间的数据交互，服务的注入、调用，动画，指令的绑定，路由的创建，拦截路由的创建，路由的延迟加载等等。',
              '结合Json-server后端模拟api，实现HTTP请求，完成注册、登陆的功能',
              'UI库使用的是：NG-ZORRO。它在2017-08-15开源了，NG-ZORRO由阿里计算平台事业部、阿里云等不同部门的一些小伙伴在原业务组件的基础上共同构建而成，在这个过程中得到了蚂蚁金服Ant Design团队的很多帮助。',
    '感谢制作过程中帮忙解决困难得道友~']
  }
  constructor() { }

  ngOnInit() {
  }

}
