/* @flow */

const actions: any = {
  selectTemplate (context: any, prop: string) {
    context.dispatch('renderUML', context.state[prop])
    context.dispatch('setEditorText')
  }
}

const state: any = {
  useCase:
`@startuml

actor A
actor B

A -up-> (up)
A -right-> (center)
A -down-> (down)
A -left-> (left)

B -up-> (up)
B -left-> (center)
B -right-> (right)
B -down-> (down)

@enduml`,
  ActivityB:
`@startuml

|A Section|
start
:step1;
|#AntiqueWhite|B Section|
:step2;
:step3;
|A Section|
:step4;
|B Section|
:step5;
stop

@enduml`,
  Activity:
`@startuml

(*) -down-> "step 1"

if "action" then
  -down->[true] "step 2"
  -down-> "step 3"
  -down->[End] (*)
else
  -right->[false] "error"
  -up-> "step 1"
endif

@enduml`,
  Sequence:
`@startuml

A -> B: step1

activate B
B -> C: step2

activate C
C --> C: action
C -> B: step3
deactivate C

B -> A: step4
deactivate B

@enduml`,
  Object:
`@startuml

object Car
object Bus
object Tire
object Engine
object Driver

Car <|- Bus
Car *-down- Tire
Car *-down- Engine
Bus o-down- Driver

@enduml`,
  Class:
`@startuml

class Car {
  color
  model
  +start()
  #run()
  #stop()
}

Car <|- Bus
Car *-down- Tire
Car *-down- Engine
Bus o-down- Driver

@enduml`
}

export default {
  state,
  actions
}
