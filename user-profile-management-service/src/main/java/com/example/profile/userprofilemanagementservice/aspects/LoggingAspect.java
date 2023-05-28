package com.example.profile.userprofilemanagementservice.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    
    // @Before("execution(* com.example.profile.userprofilemanagementservice.controllers.UserController.updateUser(..))")
    // public void beforeUpdateUser(JoinPoint joinPoint)
    // {
    //     System.out.println("User with id: "+joinPoint.getArgs()[0]+" will be edited");
    // }

    @After("execution(* com.example.profile.userprofilemanagementservice.controllers.UserController.updateUser(..))")
    public void afterUpdateUser(JoinPoint joinPoint)
    {
        System.out.println("Edit function has been called");
    }

    // @AfterReturning(pointcut = "execution(* com.example.profile.userprofilemanagementservice.controllers.UserController.updateUser(..))", returning = "result")
    // public void afterUpdateUserReturning(JoinPoint joinPoint, Object result)
    // {
    //     System.out.println("User new data: "+joinPoint.getArgs()[1]+" has been edited successfully");
    // }

    @AfterThrowing(pointcut = "execution(* com.example.profile.userprofilemanagementservice.controllers.UserController.updateUser(..))", throwing = "ex")
    public void afterUpdateUserThrowing(JoinPoint joinPoint, Exception ex)
    {
        System.out.println("Exception thrown while updating user: " + joinPoint.getSignature()+" , ex = " + ex.getMessage());
    }

    @AfterThrowing(pointcut = "execution(* com.example.profile.userprofilemanagementservice.controllers.*.delete*(..))", throwing = "ex")
    public void afterDeletingThrowing(JoinPoint joinPoint, Exception ex)
    {
        System.out.println("Exception thrown while Deleting: " + joinPoint.getSignature()+" , ex = " + ex.getMessage());
    }

    @Around("execution(* com.example.profile.userprofilemanagementservice.controllers.UserController.updateUser(..))")
    public Object aroundUpdateUser(ProceedingJoinPoint joinPoint) throws Throwable
    {
        System.out.println("User with id: "+joinPoint.getArgs()[0]+" will be edited");
        Object result = joinPoint.proceed();
        System.out.println("User new data: "+joinPoint.getArgs()[1]+" has been edited successfully");
        return result;
    }

    @Around("execution(* com.example.profile.userprofilemanagementservice.controllers.*.add*(..))")
    public Object aroundAdd(ProceedingJoinPoint joinPoint) throws Throwable
    {
        System.out.println("Adding data: " + joinPoint.getArgs()[0]);
        Object result = joinPoint.proceed();
        System.out.println("Data Added successfully using " + joinPoint.getSignature().getName() + " function.");
        return result;
    }
}
