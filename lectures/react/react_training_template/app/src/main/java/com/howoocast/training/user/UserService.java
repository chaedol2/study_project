package com.howoocast.training.user;

import com.querydsl.core.types.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    @Transactional(readOnly = true)
    public Page<UserDomain> page(
        Predicate predicate,
        Pageable pageable
    ) {
        return repository.findAll(predicate, pageable);
    }

    @Transactional(readOnly = true)
    public UserDomain get(Long id) {
        return repository.findById(id).orElseThrow(() -> {
            throw new UserNotFoundException();
        });
    }

    @Transactional
    public void add(UserDomain parameter) {
        repository.save(parameter);
    }

    @Transactional
    public void change(Long id, UserDomain parameter) {
        UserDomain user = repository.findById(id).orElseThrow(() -> {
            throw new UserNotFoundException();
        });
        user.change(parameter);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
