package com.howoocast.training.user;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import java.time.LocalDate;
import java.util.List;

public class UserPredicate {

    private final BooleanBuilder criteria = new BooleanBuilder();
    private static final QUserDomain user = QUserDomain.userDomain;

    public UserPredicate(
        String keywordType,
        String keyword,
        List<String> gender,
        List<String> hiredType,
        LocalDate birthDateStart,
        LocalDate birthDateEnd
    ) {
        this.keyword(keywordType, keyword);
        this.gender(gender);
        this.hiredType(hiredType);
        this.birthDate(birthDateStart, birthDateEnd);
    }

    protected void keyword(String keywordType, String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            return;
        }

        if (keywordType == null || keywordType.equals("이름")) {
            this.criteria.and(user.name.containsIgnoreCase(keyword));
        } else if (keywordType.equals("이메일")) {
            this.criteria.and(user.email.containsIgnoreCase(keyword));
        } else if (keywordType.equals("주소")) {
            this.criteria.and(user.address.containsIgnoreCase(keyword));
        }
    }

    protected void gender(List<String> gender) {
        if (gender == null) {
            return;
        }

        this.criteria.and(user.gender.in(gender));
    }

    protected void hiredType(List<String> hiredType) {
        if (hiredType == null) {
            return;
        }
        this.criteria.and(user.hiredType.in(hiredType));
    }

    protected void birthDate(LocalDate start, LocalDate end) {
        if (start != null) {
            this.criteria.and(user.birthDate.goe(start));
        }
        if (end != null) {
            this.criteria.and(user.birthDate.loe(end));
        }
    }

    public Predicate build() {
        return this.criteria;
    }
}
