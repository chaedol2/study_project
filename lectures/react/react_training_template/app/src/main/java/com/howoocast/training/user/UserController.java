package com.howoocast.training.user;

import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/users")
    public Page<UserDomain> page(
        @RequestParam(required = false) String keywordType,
        @RequestParam(required = false) String keyword,
        @RequestParam(required = false, name = "gender") List<String> gender,
        @RequestParam(required = false, name = "hiredType") List<String> hiredType,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthDateStart,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthDateEnd,
        @PageableDefault(direction = Direction.DESC, sort = "id") Pageable pageable
    ) {
        return service.page(new UserPredicate(
            keywordType,
            keyword,
            gender,
            hiredType,
            birthDateStart,
            birthDateEnd
        ).build(), pageable);
    }

    @GetMapping("/users/{id}")
    public UserDomain get(
        @PathVariable Long id
    ) {
        return service.get(id);
    }

    @PutMapping("/users")
    public void add(@RequestBody UserDomain parameter) {
        service.add(parameter);
    }

    @PutMapping("/users/{id}")
    public void change(@PathVariable Long id, @RequestBody UserDomain parameter) {
        service.change(id, parameter);
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
