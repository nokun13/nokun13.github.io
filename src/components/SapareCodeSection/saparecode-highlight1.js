import {SapareImgSet1} from '../SliderSection/SapareImages1'

export const sapareHighlight1 = {
    slides: SapareImgSet1,

    mainCode:
`<!-- 선언적 트랜잭션(<tx:advice>) 선언 -->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="*Process" rollback-for="java.lang.Exception"/>
    </tx:attributes>
</tx:advice>

<!-- 트랜잭션 설정 -->
<aop:config>
    <aop:advisor advice-ref="txAdvice" pointcut="execution(* service.SapareServiceImp.*(..))" />
</aop:config>

<!-- 파일 업로드 -->
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <property name="maxUploadSize" value="1000000000" />
</bean>

<!-- SapareDaoImp -->
<bean id="dao" class="dao.SapareDaoImp">
    <property name="sqlSession" ref="sqlSession" />
</bean>

<!-- SapareServiceImp -->
<bean id="service" class="service.SapareServiceImp">
    <property name="dao" ref="dao" />
</bean>

<!-- Controller -->
<bean class="controller.SapareController">
    <property name="service" ref="service" />
</bean>
    <bean id="chatWebSocketHandler" class="controller.ChatWebSocketHandler">
    <property name="service" ref="service" />
    </bean>
<websocket:handlers >
<websocket:mapping handler="chatWebSocketHandler" path="/chatws.do"/>
</websocket:handlers>`,

    mainCode2:
`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
 PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
 "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="member">

	<select id="info" parameterType="dto.memberDTO" resultType="dto.memberDTO">
		select * from sapareMember where memberName=#{memberName}
	</select>

	<select id="checkNick" parameterType="dto.memberDTO" resultType="int">
		select count(*) from sapareMember where nickname=#{nickname}
    </select>
</mapper>`,

    mainDesc:
    `Spring 프레임워크를 활용하여 개발한 중고매매 웹 애플리케이션 사파리입니다. Spring 프레임워크가
    제공하는 의존성 주입과 제어의 역전을 활용하여 사용되는 객체들을 Spring 컨테이너에 Bean으로 등록하였으며
    dispatcher-sapare.xml을 생성하여 Bean을 관리하였습니다. 개인정보 수정, '좋아요' 버튼 클릭과 같은
    다양한 기능들을 AJAX를 활용하여 최대한 비동기식으로 실행시킬 수 있도록 하였으며 카카오가 제공하는 MAP API를
    사용하여 거래 위치를 선택할 수 있도록 하였습니다. 판매자와 구매자가 메시지를 주고 받으며 연락을 할 수 있도록 채팅 서버 또한
    구축하였습니다. 수월한 쿼리문 관리와 데이터베이스 연결을 위하여 MyBatis mapper를 사용하였으며, 결합도를 낮추기 위하여
    MVC 구조를 View, Controller, DAO, Service, Mapper로 나눴습니다.`,

    mainDesc2:
    `dispatcher-sapare.xml에서 필요한 Bean들을 생성, 연결시켜주어 Spring 컨테이너에 제어관리를 넘겨줍니다.
    파일 업로드, aop, transactionManager, websocket 등 여러 기능을 활용하기 위하여 Bean을 생성, 설정하였습니다.`,

    mainDesc3:
    `여러 mapper 파일을 생성하여 기능의 목적에 따라 쿼리문을 해당하는 mapper 파일에 포함하여
    관리를 수월하게 하였습니다.`,
}