package com.howoocast.training.user;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@Entity
@NoArgsConstructor
public class UserJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    protected String companyName; // 근무처명

    @NotNull
    @Column(nullable = false)
    protected LocalDate startDate; // 근무시작일

    @NotNull
    @Column(nullable = false)
    protected LocalDate endDate; // 근무종료일

    @NotBlank
    @Column(nullable = false)
    protected String majorJob; // 주 업무

    public UserJob(UserJob parameter) {
        this.companyName = parameter.getCompanyName();
        this.startDate = parameter.getStartDate();
        this.endDate = parameter.getEndDate();
        this.majorJob = parameter.getMajorJob();
    }
}
