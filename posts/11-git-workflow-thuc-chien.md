---
title: 'Git Workflow Thực Chiến - Từ Newbie Đến Pro'
date: '2025-01-06'
series: 'Kỹ năng thực chiến'
tags: ['Git', 'Version Control', 'Collaboration', 'Best Practices']
---

# Git Workflow Thực Chiến - Từ Newbie Đến Pro

> "Git is hard. Mastering Git makes you a 10x developer" - Every Senior Developer Ever

## 😰 Confession: Mình Từng "Sợ" Git

Ngày xưa, mình từng:
- Copy code ra Notepad để "backup" trước khi merge 😅
- Chỉ dùng `git add .` và `git commit -m "update"` 
- Thấy merge conflict là... xóa repo tạo lại 💀
- Không dám làm việc nhóm vì sợ "làm hỏng code người khác"

**Sau 2 năm làm việc với Git:** Giờ mình tự tin merge, rebase, cherry-pick như ăn cơm. Và mình muốn chia sẻ những bài học thực tế để bạn không phải trải qua những sai lầm như mình!

## 🎯 Git Workflow Chuẩn Cho Team

### The Golden Flow

```bash
# 1. Luôn luôn pull trước khi làm việc
git checkout main
git pull origin main

# 2. Tạo branch cho feature/bug
git checkout -b feature/user-authentication

# 3. Làm việc và commit thường xuyên
git add src/auth/
git commit -m "feat: Add login functionality"

# 4. Push lên remote
git push origin feature/user-authentication

# 5. Tạo Pull Request trên GitHub/GitLab
# 6. Sau khi được review & merge
git checkout main
git pull origin main
git branch -d feature/user-authentication
```

**💎 Tại sao flow này tốt?**
- ✅ Code luôn sync với team
- ✅ Mỗi feature một branch → Dễ review
- ✅ Main branch luôn stable
- ✅ Có history rõ ràng về ai làm gì, khi nào

## 📝 Commit Messages - Nghệ Thuật Kể Chuyện

### ❌ Bad Commits

```bash
git commit -m "update"
git commit -m "fix bug"
git commit -m "done"
git commit -m "asdfghjkl"  # Thật sự có người commit này! 😅
```

**Vấn đề:**
- 3 tháng sau không ai hiểu commit này làm gì
- Debug khó khăn vì không biết thay đổi gì
- Code review mất nhiều thời gian hơn

### ✅ Good Commits - Conventional Commits

```bash
# Feature mới
git commit -m "feat: Add user registration with email verification"

# Fix bug
git commit -m "fix: Resolve null pointer exception in UserService.login()"

# Refactor
git commit -m "refactor: Extract validation logic to separate class"

# Documentation
git commit -m "docs: Update README with installation instructions"

# Performance improvement
git commit -m "perf: Optimize database query for user search (reduce from 2s to 200ms)"

# Tests
git commit -m "test: Add integration tests for payment gateway"
```

**Format chuẩn:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types phổ biến:**
- `feat:` - Feature mới
- `fix:` - Fix bug
- `docs:` - Documentation
- `style:` - Formatting, missing semicolons, etc
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**💎 Pro Tip:** Dùng tool `commitizen` để generate commit messages chuẩn:
```bash
npm install -g commitizen
git cz  # Thay vì git commit
```

## 🌿 Branching Strategy

### Feature Branch Workflow (Recommend cho team nhỏ)

```
main (production)
  ├── develop (integration branch)
       ├── feature/user-auth (Tin đang làm)
       ├── feature/payment (Hùng đang làm)
       └── bugfix/login-error (Mai đang fix)
```

**Quy tắc:**
- `main`: Chỉ merge code đã tested kỹ
- `develop`: Integration branch, merge features vào đây trước
- `feature/*`: Mỗi feature một branch
- `bugfix/*`: Mỗi bug một branch
- `hotfix/*`: Fix urgent bug trên production

### Git Flow Commands

```bash
# Bắt đầu feature mới
git checkout develop
git pull origin develop
git checkout -b feature/shopping-cart

# Làm việc...
git add .
git commit -m "feat: Add cart functionality"

# Xong rồi, merge vào develop
git checkout develop
git pull origin develop  # Đảm bảo develop up-to-date
git merge feature/shopping-cart

# Push lên remote
git push origin develop

# Cleanup
git branch -d feature/shopping-cart
```

## 😱 Merge Conflicts - Đừng Sợ!

### Story Time: Lần Đầu Gặp Merge Conflict

Mình còn nhớ lần đầu thấy này:

```
<<<<<<< HEAD
public void login(String username, String password) {
    // My code
}
=======
public boolean authenticate(String user, String pass) {
    // Teammate's code
}
>>>>>>> feature/new-auth
```

**Phản ứng của mình:** "WTF is this???" → Close terminal → Pretend nothing happened 😂

### ✅ Cách Xử Lý Đúng

```bash
# 1. Hiểu conflict đang ở đâu
git status

# 2. Mở file conflict trong editor
# VS Code highlight conflict rất đẹp!

# 3. Quyết định giữ code nào
# - Keep yours (HEAD)
# - Keep theirs 
# - Keep both
# - Write new code combining both

# 4. Sau khi resolve
git add <conflicted-file>
git commit -m "merge: Resolve conflicts in AuthService"
```

**💎 Tips tránh conflict:**
- Pull thường xuyên (ít nhất mỗi buổi sáng)
- Chia nhỏ commits, push sớm
- Communicate với team về file đang làm
- Dùng `git rebase` thay vì `merge` (advanced)

## 🚨 Git Mistakes & How to Fix

### 1. "Ối! Commit Nhầm File"

```bash
# Uncommit file nhưng giữ changes
git reset HEAD~1

# Hoặc chỉ remove file khỏi staging
git reset HEAD <file>
```

### 2. "Commit Message Sai Rồi!"

```bash
# Sửa commit message gần nhất
git commit --amend -m "feat: Correct message here"
```

### 3. "Push Nhầm Lên Main Branch!"

```bash
# Revert commit (tạo commit mới đảo ngược changes)
git revert <commit-hash>

# HOẶC hard reset (NGUY HIỂM! Chỉ nếu chưa ai pull)
git reset --hard HEAD~1
git push -f origin main  # Force push
```

### 4. "Làm Việc Nhầm Branch!"

```bash
# Đã code 2 tiếng rồi mới nhận ra ở sai branch 😱
# Stash changes
git stash

# Switch to correct branch
git checkout correct-branch

# Apply changes
git stash pop
```

### 5. "Muốn Undo Everything!"

```bash
# Discard tất cả changes chưa commit
git reset --hard HEAD

# Discard changes của 1 file cụ thể
git checkout -- <file>
```

## 🔍 Useful Git Commands - Must Know

### View History

```bash
# Beautiful git log
git log --oneline --graph --all --decorate

# See who changed what
git blame <file>

# Find when a bug was introduced
git bisect start
```

### Time Travel

```bash
# Xem code ở commit cũ
git checkout <commit-hash>

# Quay về thực tại
git checkout main

# Xem thay đổi giữa 2 commits
git diff <commit1> <commit2>
```

### Advanced Stuff

```bash
# Cherry-pick: Copy một commit cụ thể
git cherry-pick <commit-hash>

# Rebase: Làm history đẹp hơn
git rebase main

# Interactive rebase: Edit multiple commits
git rebase -i HEAD~3
```

## 🛠️ Git Alias - Làm Việc Nhanh Hơn

Thêm vào `~/.gitconfig`:

```bash
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --oneline --graph --all --decorate
    undo = reset --soft HEAD~1
```

Giờ thay vì gõ `git status`, chỉ cần `git st`! 🚀

## 👥 Collaboration Tips

### Pull Request Best Practices

**Khi tạo PR:**
1. **Title rõ ràng:** "feat: Add user authentication with JWT"
2. **Description đầy đủ:**
   ```markdown
   ## Changes
   - Implemented JWT token generation
   - Added login/logout endpoints
   - Created middleware for auth protection
   
   ## Testing
   - Manual testing on local
   - Unit tests added (coverage 85%)
   
   ## Screenshots
   [Attach if UI changes]
   ```

3. **Keep PR small:** < 400 lines of changes
4. **Self-review trước khi submit**

**Khi review PR:**
- ✅ Check logic errors
- ✅ Suggest improvements (nicely!)
- ✅ Test locally nếu cần
- ❌ Không comment "Bad code" - Giải thích tại sao và suggest better approach

## 📊 Real Project Example

### Case Study: E-commerce Project

**Tình huống:** Team 5 người build website bán hàng

**Branch structure:**
```
main
  └── develop
       ├── feature/product-catalog (Tin)
       ├── feature/shopping-cart (Hùng)
       ├── feature/payment-gateway (Mai)
       ├── feature/user-reviews (Lan)
       └── feature/admin-dashboard (Nam)
```

**Daily Workflow:**
```bash
# Morning - 8:00 AM
git checkout develop
git pull origin develop
git checkout feature/product-catalog
git merge develop  # Sync with team changes

# Work... Work... Work...

# Lunch - 12:00 PM
git add .
git commit -m "feat: Add product filtering by category"
git push origin feature/product-catalog

# Afternoon - 2:00 PM
git pull origin develop  # Check for updates
# Continue working...

# End of day - 6:00 PM
git add .
git commit -m "feat: Complete product search functionality"
git push origin feature/product-catalog

# Create PR để team review
```

**Kết quả sau 1 tháng:**
- ✅ Không có conflict nghiêm trọng
- ✅ Code luôn có thể rollback khi cần
- ✅ History rõ ràng, dễ debug
- ✅ Team work hiệu quả

## 🎯 Challenge: Practice Now!

### Week 1 Challenge
1. Tạo repo mới cho personal project
2. Setup branch strategy (main + develop)
3. Commit với conventional commits
4. Practice merge/rebase

### Week 2 Challenge  
1. Contribute to open-source project
2. Create good PR
3. Respond to code review
4. Practice resolving conflicts

**Share progress của bạn!** 💪

## 💭 Suy Nghĩ Cuối

Git không khó, nhưng cần:
- ✅ Practice thường xuyên
- ✅ Hiểu concepts (không học vẹt commands)
- ✅ Làm việc nhóm để thấy giá trị thực sự
- ✅ Đừng sợ sai - Có thể undo hầu hết mọi thứ!

**Quote yêu thích của mình:**
> "Git gets easier once you understand branches are homeomorphic endofunctors mapping submanifolds of a Hilbert space" - Just kidding! Git is simple once you practice! 😄

---

## 📚 Resources

**Must Read:**
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free & comprehensive
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Fix common mistakes
- [Git Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)

**Interactive Learning:**
- [Learn Git Branching](https://learngitbranching.js.org/) - Game-ified!
- [Visualizing Git](https://git-school.github.io/visualizing-git/)

**Tools:**
- GitKraken/SourceTree - GUI clients
- Git Graph (VS Code extension) - Visualize branches

---

Bạn có Git story nào để share không? Comment bên dưới nhé! 

**Next post:** Mình sẽ viết về **CI/CD with GitHub Actions** - Automation everything! 🤖

#Git #VersionControl #Collaboration #DevOps #BestPractices
