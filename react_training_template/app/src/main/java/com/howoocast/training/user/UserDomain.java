package com.howoocast.training.user;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@Entity
public class UserDomain {

    public static final String KEY = "user";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email; // 이메일
    private LocalDate birthDate; // 생년월일
    private String gender; //성별
    private String address; // 거주지 주소
    private String phone; // 연락처(핸드폰)
    private String hiredType; // 입사 구분
    private LocalDate hiredDate; // 입사일

    @OneToMany(cascade = CascadeType.ALL)
    private List<UserJob> jobList;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt;


    public void change(
        UserDomain parameter
    ) {
        this.name = parameter.getName();
        this.email = parameter.getEmail();
        this.birthDate = parameter.getBirthDate();
        this.gender = parameter.getGender();
        this.address = parameter.getAddress();
        this.phone = parameter.getPhone();
        this.hiredDate = parameter.getHiredDate();
        this.hiredType = parameter.getHiredType();
        if (parameter.getJobList() != null) {
            this.jobList = parameter.getJobList().stream().map(UserJob::new).collect(Collectors.toList());
        }
        this.modifiedAt = LocalDateTime.now();
    }
}
